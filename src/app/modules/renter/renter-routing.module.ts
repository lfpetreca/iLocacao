import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RenterComponent } from './renter.component';


const routes: Routes = [{
  path: '', component: RenterComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RenterRoutingModule { }
