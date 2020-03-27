import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LesseesRoutingModule } from './lessees-routing.module';
import { LesseesComponent } from '../lessees/lessees.component';


@NgModule({
  declarations: [LesseesComponent],
  imports: [
    CommonModule,
    LesseesRoutingModule
  ]
})
export class LesseesModule { }
