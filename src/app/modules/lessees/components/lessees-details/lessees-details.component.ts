import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';

import { LesseeService } from '../../../../services/lessee/lessee.service';
import { Lessee } from '../../../../entities/lessee/lessee';


@Component({
  selector: 'app-lessees-details',
  templateUrl: './lessees-details.component.html',
  styleUrls: ['./lessees-details.component.scss']
})
export class LesseesDetailsComponent implements OnInit {
  public lesseeId;

  lesseeForm: FormGroup;
  submitted: boolean = false;
  lessee: Lessee;
  message: string;

  estados: any[];

  constructor(
    private firestore: AngularFirestore,
    private lesseeService: LesseeService,
    private httpClient: HttpClient,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => this.lesseeId = params['lesseeId'])
    this.getLesssee(this.lesseeId)

    this.lesseeForm = this.formBuilder.group({
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

  public get f() { return this.lesseeForm.controls }

  public get address() { return this.lesseeForm.controls['address'] }
  public get contacts() { return this.lesseeForm.get('contacts') as FormArray }

  public createContact(): FormGroup {
    return this.formBuilder.group({
      phone: ['', Validators.required],
      phoneType: ['cellphone', Validators.required]
    })
  }

  //not working yet
  getLesssee(key: string) {
    this.firestore.collection('Lessees')
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

  lesseeFormOnSubmit() {
    this.submitted = true;
    //console.log(this.lesseeForm.value)
    if (this.lesseeForm.invalid) { return; }

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
    this.lesseeService.updateLessee(this.lesseeId, this.lessee)
      .then(res => {
        this.message = 'Dados do Inquilino Atualizado com Sucesso!'
      }).catch((error: any) => {
        console.error(error)
      })
    //Then 
  }

}
