import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

import { RentersRoutingModule } from './renters-routing.module';
import { RentersComponent } from './components/renters/renters.component';
import { NewRenterComponent } from './components/new-renter/new-renter.component';


@NgModule({
  declarations: [RentersComponent, NewRenterComponent],
  imports: [
    CommonModule,
    RentersRoutingModule,
    TranslateModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ]
})
export class RentersModule { }
