import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RentersRoutingModule } from './renters-routing.module';
import { RentersComponent } from './renters.component';


@NgModule({
  declarations: [RentersComponent],
  imports: [
    CommonModule,
    RentersRoutingModule
  ]
})
export class RentersModule { }
