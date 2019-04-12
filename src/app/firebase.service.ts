import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private db:AngularFirestore;
	private allEntries: AngularFirestoreCollection<Object>;
  private missingEntries: AngularFirestoreCollection<Object>;
  private loggedIn:boolean;

  constructor(db:AngularFirestore) {
    this.db = db;
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
  }

  get AllRecords():Observable<Object> {
    if(!this.loggedIn) {
      return undefined;
    } else {
      return this.allEntries.valueChanges();
    }
  }

  get MissingRecords():Observable<Object> {
    if(!this.loggedIn) {
      return undefined;
    } else {
      return this.missingEntries.valueChanges();
    }
  }
}
