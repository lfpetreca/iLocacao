import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LesseeComponent} from './lessee.component';


const routes: Routes = [{
  path: '', component: LesseeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LesseeRoutingModule { }
