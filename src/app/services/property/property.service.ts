import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(
    public firestore: AngularFirestore
  ) { }

  createNewProperty(Property) {
    return new Promise<any>((resolve, reject) => {
      this.firestore.collection('Properties')
        .add(Property)
        .then(res => { }, err => reject(err));
    })
  }


  getAllProperties() {
    return this.firestore.collection('Properties')
      .snapshotChanges()
  }
  
  updateProperty(key: string, Property) {
    return this.firestore.collection('Properties')
      .doc(key)
      .set({ Property }, { merge: true })
  }

  deleteProperty(Property) {
    return this.firestore.collection('Properties')
      .doc(Property.payload.doc.id)
      .delete()
  }
}
