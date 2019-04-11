import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private db:AngularFirestore;
	private userCollection: AngularFirestoreCollection<Object>;

  constructor(db:AngularFirestore) {
    this.db = db;
  }

  logIn(user:string):Promise<boolean> {
    this.userCollection = this.db.collection<Object>(user);
    //TODO: this is really inelegant... but I forget how to correctly use Observables.
    return new Promise((resolve, reject) => {
      this.userCollection.get().subscribe((whatever) => {
        resolve(!whatever.empty);
      });
    });
  }

  // addResponse(response:Response) {
  // 	this.responsesCollection.add(response.getData());
  // }

  // addDemographics(demographics:Demographics, uid:string) {
  //   this.demographicsCollection.doc(uid).set(demographics.getData());
  // }
}
