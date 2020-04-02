import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LesseesComponent} from './components/lessees/lessees.component';
import { LesseesDetailsComponent } from './components/lessees-details/lessees-details.component';


const routes: Routes = [
  { path: '', component: LesseesComponent, pathMatch: 'full' },
  { path: ':lesseeId', component: LesseesDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LesseesRoutingModule { }
