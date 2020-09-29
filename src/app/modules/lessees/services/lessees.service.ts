import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { AngularFirestore } from '@angular/fire/firestore';
import { map, take, tap } from 'rxjs/operators';
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
          this.dispatchReturnOrError('Fetching Lessees failed, plese try again!', null, 4000);
        })
    );
  }

  addLesseeToDatabase(lessee: Lessee): void {
    this._store.dispatch(new UI.StartLoading());
    this._db.collection('Lessees').add({ ...lessee })
      .then(() => {
        this.dispatchReturnOrError('Lessee successfully added!', null, 4000);
      }).catch(err => {
        this.dispatchReturnOrError('Adding Lessee failed, plese try again!', null, 4000);
      });
  }

  deleteLessee(lesseeId: string): void {
    this._store.dispatch(new UI.StartLoading());
    this._db.collection('Lessees').doc(lesseeId).delete()
      .then(() => {
        this.dispatchReturnOrError('Lessee successfully deleted!', null, 4000);
      }).catch(err => {
        this.dispatchReturnOrError('Delete Lessee failed, plese try again!', null, 4000);
      });
  }

  updateLessee(lesseeId: string, lessee: Lessee): void {
    this._store.dispatch(new UI.StartLoading());
    this._db.collection('Lessees').doc(lesseeId).update({ ...lessee })
      .then(() => {
        this.dispatchReturnOrError('Lessee successfully updated!', null, 4000);
      }).catch(err => {
        this.dispatchReturnOrError('Update Lessee failed, plese try again!', null, 4000);
      });
  }

  fetchLessee(key: string): any {
    this._store.dispatch(new UI.StartLoading());
    this._firebaseSubs.push(
      this._db.collection('Lessees')
        .doc(key).valueChanges()
        .pipe(map(lessee => lessee))
        .subscribe((lessee: Lessee) => {
          this._store.dispatch(new UI.StopLoading());
          this._store.dispatch(new LesseeActions.GetLessee(lessee));
        }, err => {
          this.dispatchReturnOrError('Fetching Lessees failed, plese try again later', null, 4000);
        })
    );
  }

  private dispatchReturnOrError(message: string, action: any, time: number): void {
    this._store.dispatch(new UI.StopLoading());
    this._uiService.showSnackbar(message, action, time);
  }

  cancelSubscriptions(): void {
    this._firebaseSubs.map(sub => sub.unsubscribe());
  }

}
