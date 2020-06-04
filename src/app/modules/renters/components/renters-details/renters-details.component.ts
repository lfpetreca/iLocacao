import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';

import { RenterService } from '../../../../services/renter/renter.service';
import { Renter } from '../../../../entities/renter/renter';

@Component({
  selector: 'app-renters-details',
  templateUrl: './renters-details.component.html',
  styleUrls: ['./renters-details.component.scss']
})
export class RentersDetailsComponent implements OnInit {

  public renterId;

  renterForm: FormGroup;
  submitted: boolean = false;
  renter: Renter;
  message: string;

  estados: any[];

  constructor(
    private firestore: AngularFirestore,
    private renterService: RenterService,
    private httpClient: HttpClient,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => this.renterId = params['renterId'])
    this.getRenter(this.renterId)

    this.renterForm = this.formBuilder.group({
      name: [``, [Validators.required]],
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

  public get f() { return this.renterForm.controls }

  public get address() { return this.renterForm.controls['address'] }
  public get contacts() { return this.renterForm.get('contacts') as FormArray }

  public createContact(): FormGroup {
    return this.formBuilder.group({
      phone: ['', Validators.required],
      phoneType: ['cellphone', Validators.required]
    })
  }

  //not working yet
  getRenter(key: string) {
    this.firestore.collection('renters')
      .doc(key).ref.get()
      .then(function (doc) {
        if (doc.exists) {
          return doc.data()
        } else {
          return 'There is no document!'
        }
      }).catch(error => {
        console.error(error);
      })

  }

  renterFormOnSubmit() {
    this.submitted = true;
    //console.log(this.renterForm.value)
    if (this.renterForm.invalid) { return; }

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
    this.renterService.updateRenter(this.renterId, this.renter)
      .then(res => {
        this.message = 'Dados do Inquilino Atualizado com Sucesso!'
      }).catch((error: any) => {
        console.error(error)
      })
    //Then 
  }
}
