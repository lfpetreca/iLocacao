import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RentersRoutingModule } from './renters-routing.module';
import { RentersComponent } from './components/renters/renters.component';
import { NewRenterComponent } from './components/new-renter/new-renter.component';
import { RentersListComponent } from './components/renters-list/renters-list.component';
import { RentersDetailsComponent } from './components/renters-details/renters-details.component';

import { RenterService } from '../../services/renter/renter.service';


@NgModule({
  declarations: [
    RentersComponent,
    NewRenterComponent,
    RentersListComponent,
    RentersDetailsComponent
  ],
  imports: [
    CommonModule,
    RentersRoutingModule,
    TranslateModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    NgbModule
  ],
  providers: [
    RenterService
  ]
})
export class RentersModule { }
