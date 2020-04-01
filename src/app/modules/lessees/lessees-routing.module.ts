import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LesseesComponent} from './components/lessees/lessees.component';


const routes: Routes = [{
  path: '', component: LesseesComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LesseesRoutingModule { }
