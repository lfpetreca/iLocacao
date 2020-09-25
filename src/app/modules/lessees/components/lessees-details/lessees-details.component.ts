import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Lessee } from '../../entities/lessee';
import { LesseeService } from '../../services/lessees.service';
import { LocalitiesService } from '../../../../shared/services/localities.service';
import { UIService } from '../../../../shared/services/ui.service';
import * as fromRoot from '../../../../app.reducer';
import * as fromLessee from '../../lessees.reducer';


@Component({
  selector: 'app-lessees-details',
  templateUrl: './lessees-details.component.html',
  styleUrls: ['./lessees-details.component.scss']
})
export class LesseesDetailsComponent implements OnInit {
  public lesseeId = '';
  personalForm: FormGroup;
  addressForm: FormGroup;
  contactsForm: FormGroup;
  states: any = [];
  cities: any = [];
  lessee$: Observable<Lessee>;
  isLoading$: Observable<boolean>;

  constructor(
    private _formBuilder: FormBuilder,
    private _activeRoute: ActivatedRoute,
    private _localitiesService: LocalitiesService,
    private _lesseeService: LesseeService,
    private _store: Store<fromLessee.State>
  ) { }

  ngOnInit(): void {
    this.lesseeId = this._activeRoute.snapshot.params.lesseeId;

    this.isLoading$ = this._store.select(fromRoot.getIsLoading);

    this.states = this._localitiesService.ufList();

    this.createForm();
    this.lessee$ = this._store.select(fromLessee.getLessee);
    this.fecthLessee();
  }

  fecthLessee(): void {
    this._lesseeService.fetchLessee(this.lesseeId);
    this.setValuesToForm();
    // this.cities = this._localitiesService.getCities(this.lessee$?.address.uf);
  }

  createForm(): void {
    this.personalForm = this._formBuilder.group({
      name: ['', Validators.required],
      socialName: ['ZE'],
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

  setValuesToForm(): void {
    this.personalForm.setValue({
      name: '',
      socialName: 'ZE',
      cpf: '',
    });
  }

  get fPersonal(): FormGroup { return this.personalForm; }
  get fAddress(): FormGroup { return this.addressForm; }
  get fContacts(): FormGroup { return this.contactsForm; }

  getTheCities(uf: string): void {
    this.cities = this._localitiesService.getCities(uf);
  }

  onSubmit(): void {
    const lessee = new Lessee();

    lessee.name = this.fPersonal.value.name;
    lessee.socialName = this.fPersonal.value.socialName;
    lessee.cpf = this.fPersonal.value.cpf;
    lessee.address = {
      street: this.fAddress.value.street,
      number: this.fAddress.value.number,
      neighborhood: this.fAddress.value.neighborhood,
      zipCode: this.fAddress.value.zipCode,
      city: this.fAddress.value.city,
      uf: this.fAddress.value.uf
    };
    lessee.contacts = { phone: this.fContacts.value.phone, email: this.fContacts.value.email };

    console.log(lessee);
  }
}
