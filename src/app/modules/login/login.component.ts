import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../services/auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public auth: AuthService
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  ngOnInit() { }

  get f() { return this.loginForm.controls }

  async loginFormOnSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) { return; }
    console.log(this.loginForm.value)
    //Pass the service here
    await this.auth.doLogin(this.loginForm.value)
      .then(res => {
        this.router.navigate(['/index']);
      }, err => {
        console.log(err);
        //this.errorMessage = err.message;
      })

  }

}
