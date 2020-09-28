import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Renter } from '../../entities/renter';
import { RentersService } from '../../services/renters.service';
import { LocalitiesService } from '../../../../shared/services/localities.service';
import * as fromRoot from '../../../../app.reducer';
import * as fromRenter from '../../renters.reducer';


@Component({
  selector: 'app-renters-details',
  templateUrl: './renters-details.component.html',
  styleUrls: ['./renters-details.component.scss']
})
export class RentersDetailsComponent implements OnInit {
  public renterId = '';
  personalForm: FormGroup;
  addressForm: FormGroup;
  contactsForm: FormGroup;
  states: any = [];
  cities: any = [];
  renter$: Observable<Renter>;
  isLoading$: Observable<boolean>;

  constructor(
    private _formBuilder: FormBuilder,
    private _activeRoute: ActivatedRoute,
    private _localitiesService: LocalitiesService,
    private _renterService: RentersService,
    private _store: Store<fromRenter.State>
  ) { }

  ngOnInit(): void {
    this.renterId = this._activeRoute.snapshot.params.renterId;
    this.isLoading$ = this._store.select(fromRoot.getIsLoading);

    this.createForm();
    this.states = this._localitiesService.ufList();

    this.renter$ = this._store.select(fromRenter.getRenter);
    this._renterService.fetchRenter(this.renterId);

    // need to fecth current renter values
    // this.fecthRenterValues();
  }

  createForm(): void {
    this.personalForm = this._formBuilder.group({
      name: ['', Validators.required],
      socialName: [''],
      cpf: ['', Validators.required]
    });
    this.addressForm = this._formBuilder.group({
      street: ['', Validators.required],
      number: ['', Validators.required],
      neighborhood: ['', Validators.required],
      zipCode: ['', Validators.required],
      city: ['', Validators.required],
      uf: ['', Validators.required]
    });
    this.contactsForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required]
    });
  }

  fecthLesseValues(renter): void {
    this.personalForm.setValue({ name: renter.name, socialName: renter.socialName, cpf: renter.cpf });
    this.addressForm.setValue({
      street: renter.address.street,
      number: renter.address.number,
      neighborhood: renter.address.neighborhood,
      zipCode: renter.address.zipCode,
      city: renter.address.city,
      uf: renter.address.uf
    });
    this.contactsForm.setValue({ email: renter.contacts.email, phone: renter.contacts.phone });
  }

  get fPersonal(): FormGroup { return this.personalForm; }
  get fAddress(): FormGroup { return this.addressForm; }
  get fContacts(): FormGroup { return this.contactsForm; }

  getTheCities(uf: string): void {
    this.cities = this._localitiesService.getCities(uf);
  }

  onSubmit(): void {
    const renter = new Renter();

    renter.name = this.fPersonal.value.name;
    renter.socialName = this.fPersonal.value.socialName;
    renter.cpf = this.fPersonal.value.cpf;
    renter.address = {
      street: this.fAddress.value.street,
      number: this.fAddress.value.number,
      neighborhood: this.fAddress.value.neighborhood,
      zipCode: this.fAddress.value.zipCode,
      city: this.fAddress.value.city,
      uf: this.fAddress.value.uf
    };
    renter.contacts = { phone: this.fContacts.value.phone, email: this.fContacts.value.email };

    this._renterService.updateRenter(this.renterId, renter);

    this.fPersonal.reset();
    this.fAddress.reset();
    this.fContacts.reset();
  }
}
