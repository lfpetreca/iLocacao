import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class LesseeService {

  constructor(
    public firestore: AngularFirestore
  ) { }

  createNewLessee(Lessee) {
    return new Promise<any>((resolve, reject) => {
      this.firestore.collection('Lessees')
        .add(Lessee)
        .then(res => { }, err => reject(err));
    })
  }


  getAllLessees() {
    return this.firestore.collection('Lessees')
      .snapshotChanges()
  }

  //not working yet
  updateLessee(key: string, Lessee) {
    return this.firestore.collection('Lessees')
      .doc(key)
      .set({ Lessee }, { merge: true })
  }

  deleteLessee(Lessee) {
    return this.firestore.collection('Lessees')
      .doc(Lessee.payload.doc.id)
      .delete()
  }
}
