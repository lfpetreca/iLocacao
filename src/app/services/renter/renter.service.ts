import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class RenterService {

  constructor(
    public firestore: AngularFirestore
  ) { }

  createNewRenter(Renter) {
    return new Promise<any>((resolve, reject) => {
      this.firestore.collection('Renters')
        .add(Renter)
        .then(res => { }, err => reject(err));
    })
  }


  getAllRenters() {
    return this.firestore.collection('Renters')
      .snapshotChanges()
  }
  
  updateRenter(key: string, Renter) {
    return this.firestore.collection('Renters')
      .doc(key)
      .set({ Renter }, { merge: true })
  }

  deleteRenter(Renter) {
    return this.firestore.collection('Renters')
      .doc(Renter.payload.doc.id)
      .delete()
  }
}
