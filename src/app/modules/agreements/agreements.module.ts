import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AgreementsRoutingModule } from './agreements-routing.module';
import { AgreementsComponent } from './components/agreements/agreements.component';
import { AgreementsListComponent } from './components/agreements-list/agreements-list.component';
import { AgreementsDetailsComponent } from './components/agreements-details/agreements-details.component';
import { NewAgreementsComponent } from './components/new-agreements/new-agreements.component';


@NgModule({
  declarations: [
    AgreementsComponent, 
    AgreementsListComponent, 
    AgreementsDetailsComponent, 
    NewAgreementsComponent
  ],
  imports: [
    CommonModule,
    AgreementsRoutingModule,
    TranslateModule, 
    ReactiveFormsModule, 
    NgxMaskModule,
    NgbModule
  ]
})
export class AgreementsModule { }
