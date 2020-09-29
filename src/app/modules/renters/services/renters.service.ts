import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { AngularFirestore } from '@angular/fire/firestore';
import { map, take, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { Renter } from '../entities/renter';
import { UIService } from '../../../shared/services/ui.service';
import * as fromRenter from '../renters.reducer';
import * as RenterActions from '../renters.actions';
import * as UI from '../../../shared/ui.actions';

@Injectable({
  providedIn: 'root'
})
export class RentersService {
  private _firebaseSubs: Subscription[] = [];

  constructor(
    private _db: AngularFirestore,
    private _uiService: UIService,
    private _store: Store<fromRenter.State>
  ) { }

  fetchAvailableRenters(): void {
    this._firebaseSubs.push(
      this._db.collection('Renters')
        .snapshotChanges()
        .pipe(map(docArray => {
          return docArray.map(doc => {
            return { id: doc.payload.doc.id, ...doc.payload.doc.data() as Renter };
          });
        }))
        .subscribe((renters: Renter[]) => {
          this._store.dispatch(new UI.StopLoading());
          this._store.dispatch(new RenterActions.SetAvailableRenter(renters));
        }, err => {
          this.dispatchReturnOrError('Fetching Renters failed, plese try again!', null, 4000);
        })
    );
  }

  addRenterToDatabase(renter: Renter): void {
    this._store.dispatch(new UI.StartLoading());
    this._db.collection('Renters').add({ ...renter })
      .then(() => {
        this.dispatchReturnOrError('Renter successfully added!', null, 4000);
      }).catch(err => {
        this.dispatchReturnOrError('Adding Renter failed, plese try again!', null, 4000);
      });
  }

  deleteRenter(renterId: string): void {
    this._store.dispatch(new UI.StartLoading());
    this._db.collection('Renters').doc(renterId).delete()
      .then(() => {
        this.dispatchReturnOrError('Renter successfully deleted!', null, 4000);
      }).catch(err => {
        this.dispatchReturnOrError('Delete Renter failed, plese try again!', null, 4000);
      });
  }

  updateRenter(renterId: string, renter: Renter): void {
    this._store.dispatch(new UI.StartLoading());
    this._db.collection('Renters').doc(renterId).update({ ...renter })
      .then(() => {
        this.dispatchReturnOrError('Renter successfully updated!', null, 4000);
      }).catch(err => {
        this.dispatchReturnOrError('Update Renter failed, plese try again!', null, 4000);
      });
  }

  fetchRenter(key: string): any {
    this._store.dispatch(new UI.StartLoading());
    this._firebaseSubs.push(
      this._db.collection('Renters')
        .doc(key).valueChanges()
        .pipe(map(renter => renter))
        .subscribe((renter: Renter) => {
          this._store.dispatch(new UI.StopLoading());
          this._store.dispatch(new RenterActions.GetRenter(renter));
        }, err => {
          this.dispatchReturnOrError('Fetching Renters failed, plese try again later', null, 4000);
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
