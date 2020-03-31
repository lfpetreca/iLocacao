import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


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
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  ngOnInit() { }

  get f() { return this.loginForm.controls }

  loginFormOnSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) { return; }

    //Pass the service here

    //Then 
    localStorage.setItem('isLoggedin', 'true');
    this.router.navigate(['/index']);
  }

}
