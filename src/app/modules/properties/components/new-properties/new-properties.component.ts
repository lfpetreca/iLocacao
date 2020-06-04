import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { PropertyService } from '../../../../services/property/property.service';
import { Property } from '../../../../entities/property/property';

@Component({
  selector: 'app-new-properties',
  templateUrl: './new-properties.component.html',
  styleUrls: ['./new-properties.component.scss']
})
export class NewPropertiesComponent implements OnInit {
  newPropertieForm: FormGroup;
  submitted: boolean = false;
  property: Property;
  message: string;

  estados: any[];

  constructor(
    private propertyService: PropertyService,
    private httpClient: HttpClient,
    private formBuilder: FormBuilder
  ) {
    this.newPropertieForm = this.formBuilder.group({
      propertie: ['apartment', [Validators.required]],
      rent: ['', [Validators.required]],
      iptu: ['', [Validators.required]],
      condominium: ['', [Validators.required]],
      reference: ['', [Validators.required]],
      renter: ['', [Validators.required]],
      status: ['available', Validators.required],
      address: this.formBuilder.group({
        street: ['', Validators.required],
        number: ['', Validators.required],
        neighborhood: [''],
        zipCode: [''],
        city: ['', Validators.required],
        uf: ['', Validators.required]
      })
    })
  }
  ngOnInit() {
    this.httpClient.get("assets/json/states.json").subscribe((states: any) => {
      this.estados = states.map(state => state)
    })
  }

  public get f() { return this.newPropertieForm.controls }
  public get address() { return this.newPropertieForm.controls['address'] }

  newPropertieFormOnSubmit() {
    this.submitted = true;

    if (this.newPropertieForm.invalid) { return; }
    
    //Set Object Values
    this.property = {
      propertie: this.f.propertie.value,
      rent: this.f.rent.value,
      iptu: this.f.iptu.value,
      condominium: this.f.condominium.value,
      reference: this.f.reference.value,
      renter: this.f.renter.value,
      status: this.f.status.value,
      address: this.address.value,
    }

    //Pass the service here
    this.propertyService.createNewProperty(this.property)
      .then(res => {
        this.newPropertieForm.reset()
        this.message = 'Imóvel registrado com sucesso!'
      }).catch((error: any) => {
        console.error(error)
      })
    //Then 

    this.newPropertieForm.reset()
    this.message = 'Imóvel registrado com sucesso!'
  }

  resetMessage() {
    this.message = null
  }

}
