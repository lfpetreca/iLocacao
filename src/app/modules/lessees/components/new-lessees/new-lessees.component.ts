import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';


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
    this.estados = states;
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

const states = [
  { name: "Acre", uf: "AC" },
  { name: "Alagoas", uf: "AL" },
  { name: "Amapá", uf: "AP" },
  { name: "Amazonas", uf: "AM" },
  { name: "Bahia", uf: "BA" },
  { name: "Ceará", uf: "CE" },
  { name: "Distrito Federal", uf: "DF" },
  { name: "Espírito Santo", uf: "ES" },
  { name: "Goiás", uf: "GO" },
  { name: "Maranhão", uf: "MA" },
  { name: "Mato Grosso", uf: "MT" },
  { name: "Mato Grosso do Sul", uf: "MS" },
  { name: "Minas Gerais", uf: "MG" },
  { name: "Pará", uf: "PA" },
  { name: "Paraíba", uf: "PB" },
  { name: "Paraná", uf: "PR" },
  { name: "Pernambuco", uf: "PE" },
  { name: "Piauí", uf: "PI" },
  { name: "Rio de Janeiro", uf: "RJ" },
  { name: "Rio Grande do Norte", uf: "RN" },
  { name: "Rio Grande do Sul", uf: "RS" },
  { name: "Rondônia", uf: "RO" },
  { name: "Roraima", uf: "RR" },
  { name: "Santa Catarina", uf: "SC" },
  { name: "São Paulo", uf: "SP" },
  { name: "Sergipe", uf: "SE" },
  { name: "Tocantins", uf: "TO" }
]

