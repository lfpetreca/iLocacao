import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { AngularFirestore } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { Lessee } from '../entities/lessee';
import { UIService } from '../../../shared/services/ui.service';
import * as fromLessee from '../lessees.reducer';
import * as LesseeActions from '../lessees.actions';
import * as UI from '../../../shared/ui.actions';

@Injectable({
  providedIn: 'root'
})
export class LesseeService {
  private _firebaseSubs: Subscription[] = [];

  constructor(
    private _db: AngularFirestore,
    private _uiService: UIService,
    private _store: Store<fromLessee.State>
  ) { }

  fetchAvailableLesses(): void {
    this._firebaseSubs.push(
      this._db.collection('Lessees')
        .snapshotChanges()
        .pipe(map(docArray => {
          return docArray.map(doc => {
            return { id: doc.payload.doc.id, ...doc.payload.doc.data() as Lessee };
          });
        }))
        .subscribe((lessees: Lessee[]) => {
          this._store.dispatch(new UI.StopLoading());
          this._store.dispatch(new LesseeActions.SetAvailableLessee(lessees));
        }, err => {
          this._store.dispatch(new UI.StopLoading());
          this._uiService.showSnackbar('Fetching Lessees failed, plese try again later', null, 4000);
        })
    );
  }

  private addLesseeToDatabase(lessee: Lessee): void {
    this._db.collection('Lessees').add(lessee);
  }

  fetchLessee(key: string): void {
    this._store.dispatch(new UI.StartLoading());
    this._firebaseSubs.push(
      this._db.collection('Lessees')
        .doc(key).valueChanges()
        .pipe(map(lessee => lessee))
        .subscribe((lessee: Lessee) => {
          this._store.dispatch(new UI.StopLoading());
          this._store.dispatch(new LesseeActions.GetLessee(lessee));
        }, err => {
          this._store.dispatch(new UI.StopLoading());
          this._uiService.showSnackbar('Fetching Lessees failed, plese try again later', null, 4000);
        })
    );
  }

}
