import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RentersComponent } from './components/renters/renters.component';
import { RentersDetailsComponent } from './components/renters-details/renters-details.component';

const routes: Routes = [
  { path: '', component: RentersComponent, pathMatch: 'full' },
  { path: ':renterId', component: RentersDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RentersRoutingModule { }
