import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgreementsComponent } from './components/agreements/agreements.component';
import { AgreementsDetailsComponent } from './components/agreements-details/agreements-details.component';


const routes: Routes = [
  { path: '', component: AgreementsComponent, pathMatch: 'full' },
  { path: ':agreementId', component: AgreementsDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgreementsRoutingModule { }
