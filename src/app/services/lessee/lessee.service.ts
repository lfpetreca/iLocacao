import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class LesseeService {

  constructor(
    public firestore: AngularFirestore
  ) { }

  createNewLessee(lessee) {
    return new Promise<any>((resolve, reject) => {
      this.firestore.collection('Lessees')
        .add(lessee)
        .then(res => { }, err => reject(err));
    })
  }


  getAllLessees() {
    return this.firestore.collection('Lessees')
      .snapshotChanges()
  }

  updateLessee(lessee) {
    return this.firestore.collection('Lessees')
      .doc(lessee.payload.doc.id)
      .set({ completed: true }, { merge: true })
  }

  deleteLessee(lessee) {
    return this.firestore.collection('Lessees')
      .doc(lessee.payload.doc.id)
      .delete()
  }
}
