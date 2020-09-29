import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { AngularFirestore } from '@angular/fire/firestore';
import { map, take, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { Property } from '../entities/property';
import { UIService } from '../../../shared/services/ui.service';
import * as fromProperties from '../properties.reducers';
import * as PropertiesActions from '../properties.actions';
import * as UI from '../../../shared/ui.actions';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {
  private _firebaseSubs: Subscription[] = [];

  constructor(
    private _db: AngularFirestore,
    private _uiService: UIService,
    private _store: Store<fromProperties.State>
  ) { }

  fetchAvailableProperties(): void {
    this._firebaseSubs.push(
      this._db.collection('Properties')
        .snapshotChanges()
        .pipe(map(docArray => {
          return docArray.map(doc => {
            return { id: doc.payload.doc.id, ...doc.payload.doc.data() as Property };
          });
        }))
        .subscribe((properties: Property[]) => {
          this._store.dispatch(new UI.StopLoading());
          this._store.dispatch(new PropertiesActions.SetAvailableProperty(properties));
        }, err => {
          this.dispatchReturnOrError('Fetching Properties failed, plese try again!', null, 4000);
        })
    );
  }

  addPropertyToDatabase(property: Property): void {
    this._store.dispatch(new UI.StartLoading());
    this._db.collection('Properties').add({ ...property })
      .then(() => {
        this.dispatchReturnOrError('Property successfully added!', null, 4000);
      }).catch(err => {
        this.dispatchReturnOrError('Adding Property failed, plese try again!', null, 4000);
      });
  }

  deleteProperty(propertyId: string): void {
    this._store.dispatch(new UI.StartLoading());
    this._db.collection('Properties').doc(propertyId).delete()
      .then(() => {
        this.dispatchReturnOrError('Property successfully deleted!', null, 4000);
      }).catch(err => {
        this.dispatchReturnOrError('Delete Property failed, plese try again!', null, 4000);
      });
  }

  updateProperty(propertyId: string, property: Property): void {
    this._store.dispatch(new UI.StartLoading());
    this._db.collection('Properties').doc(propertyId).update({ ...property })
      .then(() => {
        this.dispatchReturnOrError('Property successfully updated!', null, 4000);
      }).catch(err => {
        this.dispatchReturnOrError('Update Property failed, plese try again!', null, 4000);
      });
  }

  fetchProperty(key: string): any {
    this._store.dispatch(new UI.StartLoading());
    this._firebaseSubs.push(
      this._db.collection('Properties')
        .doc(key).valueChanges()
        .pipe(map(property => property))
        .subscribe((property: Property) => {
          this._store.dispatch(new UI.StopLoading());
          this._store.dispatch(new PropertiesActions.GetProperty(property));
        }, err => {
          this.dispatchReturnOrError('Fetching Properties failed, plese try again later', null, 4000);
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
