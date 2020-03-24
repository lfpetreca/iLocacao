import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LesseeRoutingModule } from './lessee-routing.module';
import { LesseeComponent } from '../lessee/lessee.component';


@NgModule({
  declarations: [LesseeComponent],
  imports: [
    CommonModule,
    LesseeRoutingModule
  ]
})
export class LesseeModule { }
