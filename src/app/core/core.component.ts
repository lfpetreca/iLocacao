import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit {

  constructor(
    private _authService: AuthService
  ) { }

  ngOnInit(): void {
    // this._authService.initAuthListener();
  }

}
