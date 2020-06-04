import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { LesseeService } from '../../../../services/lessee/lessee.service';
import { Lessee } from '../../../../entities/lessee/lessee';


@Component({
  selector: 'app-new-lessees',
  templateUrl: './new-lessees.component.html',
  styleUrls: ['./new-lessees.component.scss']
})
export class NewLesseesComponent implements OnInit {

  newLesseeForm: FormGroup;
  submitted: boolean = false;
  lessee: Lessee;
  message: string;

  estados: any[];

  constructor(
    private lesseeService: LesseeService,
    private httpClient: HttpClient,
    private formBuilder: FormBuilder
  ) {
    this.newLesseeForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      socialName: [''],
      cpf: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: this.formBuilder.group({
        street: ['', Validators.required],
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

  public get f() { return this.newLesseeForm.controls }

  public get address() { return this.newLesseeForm.controls['address'] }
  public get contacts() { return this.newLesseeForm.get('contacts') as FormArray }

  public createContact(): FormGroup {
    return this.formBuilder.group({
      phone: ['', Validators.required],
      phoneType: ['cellphone', Validators.required]
    })
  }

  newLesseeFormOnSubmit() {
    this.submitted = true;
 
    if (this.newLesseeForm.invalid) { return; }

    //Set Object Values
    this.lessee = {
      name: this.f.name.value,
      socialName: this.f.socialName.value,
      cpf: this.f.cpf.value,
      email: this.f.email.value,
      address: this.address.value,
      contacts: this.contacts.value
    }

    //Pass the service here
    this.lesseeService.createNewLessee(this.lessee)
      .then(res => {
        this.newLesseeForm.reset()
        this.message = 'Inquilino criado com sucesso'
      }).catch((error: any) => {
        console.error(error)
      })
    //Then 

    this.newLesseeForm.reset()
    this.message = 'Inquilino criado com sucesso'
  }

  resetMessage() {
    this.message = null
  }

}
