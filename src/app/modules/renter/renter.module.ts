import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RenterRoutingModule } from './renter-routing.module';
import { RenterComponent } from '../renter/renter.component';


@NgModule({
  declarations: [RenterComponent],
  imports: [
    CommonModule,
    RenterRoutingModule
  ]
})
export class RenterModule { }
