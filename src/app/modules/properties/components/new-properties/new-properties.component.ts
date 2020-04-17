import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-new-properties',
  templateUrl: './new-properties.component.html',
  styleUrls: ['./new-properties.component.scss']
})
export class NewPropertiesComponent implements OnInit {
  newPropertieForm: FormGroup;
  submitted: boolean = false;

  estados: any[];

  constructor(
    private httpClient: HttpClient,
    private formBuilder: FormBuilder
  ) {
    this.newPropertieForm = this.formBuilder.group({
      propertie: ['apartment', [Validators.required]],
      rent: ['', [Validators.required]],
      iptu: ['', [Validators.required]],
      condominium: ['', [Validators.required]],
      reference: ['', [Validators.required]],
      lessee: ['', [Validators.required]],
      status: ['available', Validators.required],
      addressForm: this.formBuilder.group({
        address: ['', Validators.required],
        number: ['', Validators.required],
        neighborhood: [''],
        zipCode: [''],
        city: ['', Validators.required],
        uf: ['', Validators.required]
      })
    })
  }
  ngOnInit() {
    this.httpClient.get("assets/json/states.json").subscribe((states:any) => {
      this.estados = states.map(state => state)
    })
  }

  public get f() { return this.newPropertieForm.controls }
  public get addressForm() { return this.newPropertieForm.controls['addressForm'] }

  newPropertieFormOnSubmit() {
    this.submitted = true;
    console.log(this.newPropertieForm.value)

    if (this.newPropertieForm.invalid) { return; }
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
