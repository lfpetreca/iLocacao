import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { LesseesRoutingModule } from './lessees-routing.module';
import { LesseesComponent } from './components/lessees/lessees.component';
import { NewLesseesComponent } from './components/new-lessees/new-lessees.component';


@NgModule({
  declarations: [LesseesComponent, NewLesseesComponent],
  imports: [
    CommonModule,
    LesseesRoutingModule,
    TranslateModule
  ]
})
export class LesseesModule { }
