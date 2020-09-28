import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '../../shared/shared.module';
import { LesseesRoutingModule } from './lessees-routing.module';
import { LesseesComponent } from './components/lessees/lessees.component';
import { LesseesListComponent } from './components/lessees-list/lessees-list.component';
import { LesseesDetailsComponent } from './components/lessees-details/lessees-details.component';
import { NewLesseesComponent } from './components/new-lessees/new-lessees.component';
import { lesseeReducer } from './lessees.reducer';


@NgModule({
  declarations: [
    LesseesComponent,
    LesseesListComponent,
    LesseesDetailsComponent,
    NewLesseesComponent
  ],
  imports: [
    SharedModule,
    LesseesRoutingModule,
    StoreModule.forFeature('lessees', lesseeReducer)
  ]
})
export class LesseesModule { }
