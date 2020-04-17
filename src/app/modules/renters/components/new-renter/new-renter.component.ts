import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-new-renter',
  templateUrl: './new-renter.component.html',
  styleUrls: ['./new-renter.component.scss']
})
export class NewRenterComponent implements OnInit {

  newRenterForm: FormGroup;
  submitted: boolean = false;

  estados: any[];

  constructor(
    private httpClient: HttpClient,
    private formBuilder: FormBuilder
  ) {
    this.newRenterForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      socialName: [''],
      cpf: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      addressForm: this.formBuilder.group({
        address: ['', Validators.required],
        number: ['', Validators.required],
        neighborhood: [''],
        zipCode: [''],
        city: ['', Validators.required],
        uf: ['', Validators.required]
      }),
      contacts: this.formBuilder.array([this.createContact()])
    })
  }

  ngOnInit() {
    this.httpClient.get("assets/json/states.json").subscribe((states: any) => {
      this.estados = states.map(state => state)
    })
  }

  public get f() { return this.newRenterForm.controls }

  public get addressForm() { return this.newRenterForm.controls['addressForm'] }
  public get contactForm() { return this.newRenterForm.get('contacts') as FormArray }

  public createContact(): FormGroup {
    return this.formBuilder.group({
      phone: ['', Validators.required],
      phoneType: ['cellphone', Validators.required]
    })
  }

  /* addContact() {
    this.contactForm.push(this.createContact());
  } */

  newRenterFormOnSubmit() {
    this.submitted = true;
    console.log(this.newRenterForm.value)

    if (this.newRenterForm.invalid) { return; }
    //Pass the service here

    //Then 
  }

}
