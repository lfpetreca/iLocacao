import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUpForm: FormGroup;
  submitted: boolean = false;
  processing: boolean;
  errors: string[];

  isValid: boolean = false;
  message: boolean = false;


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public auth: AuthService,
  ) {
    this.signUpForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'), Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'), Validators.minLength(8)]], //this.passwordMatcher.bind(this)]],
      agree: [false, [Validators.requiredTrue]]
    })
  }

  ngOnInit(): void {
  }

  get f() { return this.signUpForm.controls; }

  async signUpFormOnSubmit() {
    this.errors = null;
    this.submitted = true;
    this.processing = true;
    this.message = false;

    if (this.signUpForm.invalid) { return; }

    await this.auth.doRegister(this.f.value)
      .then(res => {
        console.log(res);
        this.router.navigate(['/login']);
      }, err => {
        console.log(err);
      })
  }

}
