import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RentersComponent } from './renters.component';


const routes: Routes = [{
  path: '', component: RentersComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RentersRoutingModule { }
