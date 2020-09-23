import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Store } from '@ngrx/store';

import { AuthData } from '../entities/auth-data';
import { UIService } from '../../shared/services/ui.service';
import * as fromRoot from '../../app.reducer';
import * as Auth from '../auth.actions';
import * as UI from '../../shared/ui.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _router: Router,
    private _fireAuth: AngularFireAuth,
    private _uiService: UIService,
    private _store: Store<fromRoot.State>
  ) { }

  initAuthListener(): void {
    this._fireAuth.authState.subscribe(user => {
      if (user) {
        this._store.dispatch(new Auth.SetAuthenticated());
        this._router.navigate(['/']);
      } else {
        // this.INNERSERVICES.cancelSubscriptions();
        this._store.dispatch(new Auth.SetUnauthenticated());
        this._router.navigate(['/login']);
      }
    });
  }

  async registerUser(authData: AuthData): Promise<void> {
    this._store.dispatch(new UI.StartLoading());
    await this._fireAuth.createUserWithEmailAndPassword(authData.email, authData.password)
      .then(() => this._store.dispatch(new UI.StopLoading()))
      .catch(err => {
        this._store.dispatch(new UI.StopLoading());
        this._uiService.showSnackbar(err.message, null, 4000);
      });
  }

  async resetPassword(passwordResetEmail: string): Promise<void> {
    this._store.dispatch(new UI.StartLoading());
    await this._fireAuth.sendPasswordResetEmail(passwordResetEmail)
      .then(() => this._store.dispatch(new UI.StopLoading()))
      .catch(err => {
        this._store.dispatch(new UI.StopLoading());
        this._uiService.showSnackbar(err.message, null, 4000);
      });
  }

  async login(authData: AuthData): Promise<void> {
    this._store.dispatch(new UI.StartLoading());
    await this._fireAuth.signInWithEmailAndPassword(authData.email, authData.password)
      .then(() => this._store.dispatch(new UI.StopLoading()))
      .catch(err => {
        this._store.dispatch(new UI.StopLoading());
        this._uiService.showSnackbar(err.message, null, 4000);
      });
  }

  async logout(): Promise<void> {
    await this._fireAuth.signOut();
  }
}
