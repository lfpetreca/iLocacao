import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-new-lessees',
  templateUrl: './new-lessees.component.html',
  styleUrls: ['./new-lessees.component.scss']
})
export class NewLesseesComponent implements OnInit {

  newLesseeForm: FormGroup;
  submitted: boolean = false;

  estados: any[];

  constructor(
    private httpClient: HttpClient,
    private formBuilder: FormBuilder
  ) {
    this.newLesseeForm = this.formBuilder.group({
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
    this.httpClient.get("assets/json/states.json").subscribe((states:any) => {
      this.estados = states.map(state => state)
    })
  }

  public get f() { return this.newLesseeForm.controls }

  public get addressForm() { return this.newLesseeForm.controls['addressForm'] }
  public get contactForm() { return this.newLesseeForm.get('contacts') as FormArray }

  public createContact(): FormGroup {
    return this.formBuilder.group({
      phone: ['', Validators.required],
      phoneType: ['cellphone', Validators.required]
    })
  }

  /* addContact() {
    this.contactForm.push(this.createContact());
  } */

  newLesseeFormOnSubmit() {
    this.submitted = true;
    console.log(this.newLesseeForm.value)

    if (this.newLesseeForm.invalid) { return; }
    //Pass the service here

    //Then 
  }

}
