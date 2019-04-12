import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Context } from './context';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
	private allEntries: AngularFirestoreCollection<Object>;
  private missingEntries: AngularFirestoreCollection<Object>;
  private loggedIn:boolean;
  private user:string;

  constructor(private db:AngularFirestore, private storage:AngularFireStorage) {
  }

  get isLoggedIn():boolean {
    return this.loggedIn;
  }

  logIn(user:string):Promise<boolean> {
    this.allEntries = this.db.collection<Object>(user, ref => ref.orderBy('date'));
    //TODO: this requires an index for every user. Which is fine, we just have to remember to create it.
    this.missingEntries = this.db.collection<Object>(user, ref => ref.where('contextLogged', '==', false).orderBy('date'));
    //TODO: this is really inelegant... but I forget how to correctly use Observables.
    return new Promise((resolve, reject) => {
      this.allEntries.get().subscribe((contents) => {
        if(!contents.empty) {
          this.loggedIn = true;
          this.user = user;
        } else {
          //Login failed. Clear everything
          this.logOut();
        }
        resolve(!contents.empty);
      });
    });
  }

  logOut() {
    this.loggedIn = false;
    this.allEntries = undefined;
    this.user = undefined;
  }

  get AllRecords():Observable<Object> {
    if(!this.loggedIn) {
      return undefined;
    } else {
      //Using snapshotChanges() to be able to get the id.
      //https://github.com/angular/angularfire2/blob/master/docs/firestore/collections.md#snapshotchanges
      return this.allEntries.snapshotChanges().pipe(map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        const docId = a.payload.doc.id;
        return {docId, ...data};
      })));
    }
  }

  get MissingRecords():Observable<Object> {
    if(!this.loggedIn) {
      return undefined;
    } else {
      //Using snapshotChanges() to be able to get the id.
      //https://github.com/angular/angularfire2/blob/master/docs/firestore/collections.md#snapshotchanges
      return this.missingEntries.snapshotChanges().pipe(map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        const docId = a.payload.doc.id;
        return {docId, ...data};
      })));
    }
  }

  getImage(path:string):Observable<string | null> {
    let ref = this.storage.ref(this.user + '/' + path);
    return ref.getDownloadURL();
  }

  setContext(context:Context, docId:string) {
    this.db.doc(this.user + '/' + docId).update({'context':context.getData(), 'contextLogged':true});
  }
}
