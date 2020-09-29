import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Property } from '../../entities/property';
import { LocalitiesService } from '../../../../shared/services/localities.service';
import { PropertiesService } from '../../services/properties.service';
import * as fromRoot from '../../../../app.reducer';
import * as fromProperties from '../../properties.reducers';
@Component({
  selector: 'app-properties-details',
  templateUrl: './properties-details.component.html',
  styleUrls: ['./properties-details.component.scss']
})
export class PropertiesDetailsComponent implements OnInit {
  public propertyId = '';
  propertyForm: FormGroup;
  addressForm: FormGroup;
  pricesForm: FormGroup;
  propertyTypes: string[] = ['apartament', 'house', 'commercial'];
  propertyStatus: string[] = ['available', 'unavailable'];
  renters: any = [];
  states: any = [];
  cities: any = [];
  property$: Observable<Property>;
  isLoading$: Observable<boolean>;

  constructor(
    private _formBuilder: FormBuilder,
    private _activeRoute: ActivatedRoute,
    private _localitiesService: LocalitiesService,
    private _propertiesService: PropertiesService,
    private _store: Store<fromProperties.State>
  ) { }

  ngOnInit(): void {
    this.propertyId = this._activeRoute.snapshot.params.propertyId;
    this.isLoading$ = this._store.select(fromRoot.getIsLoading);

    this.states = this._localitiesService.ufList();
    this.cities = this._localitiesService.getCities('SP');
    this.renters = rentersList;
    this.createForm();

    this.property$ = this._store.select(fromProperties.getProperty);
    this._propertiesService.fetchProperty(this.propertyId);

    // need to fecth current property values
    // this.fecthPropertyValues();
  }

  createForm(): void {
    this.propertyForm = this._formBuilder.group({
      reference: ['', Validators.required],
      renter: ['', Validators.required],
      propertyType: ['apartament', Validators.required],
      status: ['available', Validators.required]
    });
    this.pricesForm = this._formBuilder.group({
      rent: [null, Validators.required],
      taxes: [0, Validators.required],
      condominium: [0, Validators.required]
    });
    this.addressForm = this._formBuilder.group({
      street: ['', Validators.required],
      number: ['', Validators.required],
      neighborhood: ['', Validators.required],
      zipCode: ['', Validators.required],
      city: ['', Validators.required],
      uf: ['SP', Validators.required]
    });
  }

  get f(): FormGroup { return this.propertyForm; }
  get fPrices(): FormGroup { return this.pricesForm; }
  get fAddress(): FormGroup { return this.addressForm; }

  getTheCities(uf: string): void {
    this.cities = this._localitiesService.getCities(uf);
  }

  onSubmit(): void {
    const property = new Property();

    property.reference = this.f.value.reference;
    property.renter = this.f.value.renter;
    property.propertyType = this.f.value.propertyType;
    property.status = this.f.value.status;
    property.prices = {
      rent: this.fPrices.value.rent,
      taxes: this.fPrices.value.taxes,
      condominium: this.fPrices.value.condominium
    };
    property.address = {
      street: this.fAddress.value.street,
      number: this.fAddress.value.number,
      neighborhood: this.fAddress.value.neighborhood,
      zipCode: this.fAddress.value.zipCode,
      city: this.fAddress.value.city,
      uf: this.fAddress.value.uf
    };

    this._propertiesService.updateProperty(this.propertyId, property);

    this.f.reset();
    this.fAddress.reset();
    this.fPrices.reset();
  }

}

const rentersList = [
  { name: 'Ozzy Osbourne', id: 'IDawrwrwefwwef' },
  { name: 'Steve Harris', id: 'IDawrwrwefwwef' },
  { name: 'Mike Rutherford', id: 'IDawrwrwefwwef' }
];
