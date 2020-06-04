import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { RenterService } from '../../../../services/renter/renter.service';
import { Renter } from '../../../../entities/renter/renter';


@Component({
  selector: 'app-new-renter',
  templateUrl: './new-renter.component.html',
  styleUrls: ['./new-renter.component.scss']
})
export class NewRenterComponent implements OnInit {

  newRenterForm: FormGroup;
  submitted: boolean = false;
  renter: Renter;
  message: string;

  estados: any[];

  constructor(
    private renterService: RenterService,
    private httpClient: HttpClient,
    private formBuilder: FormBuilder
  ) {
    this.newRenterForm = this.formBuilder.group({
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

  public get f() { return this.newRenterForm.controls }

  public get address() { return this.newRenterForm.controls['address'] }
  public get contacts() { return this.newRenterForm.get('contacts') as FormArray }

  public createContact(): FormGroup {
    return this.formBuilder.group({
      phone: ['', Validators.required],
      phoneType: ['cellphone', Validators.required]
    })
  }

  newRenterFormOnSubmit() {
    this.submitted = true;

    if (this.newRenterForm.invalid) { return; }

    //Set Object Values
    this.renter = {
      name: this.f.name.value,
      socialName: this.f.socialName.value,
      cpf: this.f.cpf.value,
      email: this.f.email.value,
      address: this.address.value,
      contacts: this.contacts.value
    }

    //Pass the service here
    this.renterService.createNewRenter(this.renter)
      .then(res => {
        this.newRenterForm.reset()
        this.message = 'Proprietário criado com sucesso'
      }).catch((error: any) => {
        console.error(error)
      })
    //Then 

    this.newRenterForm.reset()
    this.message = 'Proprietário criado com sucesso!'
  }

  resetMessage() {
    this.message = null
  }

}
