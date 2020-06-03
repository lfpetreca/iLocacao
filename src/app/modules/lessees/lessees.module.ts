import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LesseesRoutingModule } from './lessees-routing.module';
import { LesseesComponent } from './components/lessees/lessees.component';
import { NewLesseesComponent } from './components/new-lessees/new-lessees.component';
import { LesseesListComponent } from './components/lessees-list/lessees-list.component';
import { LesseesDetailsComponent } from './components/lessees-details/lessees-details.component';


@NgModule({
  declarations: [
    LesseesComponent,
    NewLesseesComponent,
    LesseesListComponent,
    LesseesDetailsComponent
  ],
  imports: [
    CommonModule,
    LesseesRoutingModule,
    TranslateModule,
    ReactiveFormsModule,
    NgxMaskModule,
    NgbModule
  ], 
  providers: [ ]
})
export class LesseesModule { }
