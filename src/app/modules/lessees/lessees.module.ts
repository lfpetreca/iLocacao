import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { LesseesRoutingModule } from './lessees-routing.module';
import { LesseesComponent } from '../lessees/lessees.component';


@NgModule({
  declarations: [LesseesComponent],
  imports: [
    CommonModule,
    LesseesRoutingModule,
    TranslateModule
  ]
})
export class LesseesModule { }
