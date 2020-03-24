import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';


const routes: Routes = [{
  path: '', component: LayoutComponent,
  children: [
    { path: '', redirectTo: 'home', pathMatch: 'prefix' },
    { path: 'home', loadChildren: () => import('../modules/home/home.module').then(m => m.HomeModule) },
    { path: 'lessee', loadChildren: () => import('../modules/lessee/lessee.module').then(m => m.LesseeModule) },
    { path: 'renter', loadChildren: () => import('../modules/renter/renter.module').then(m => m.RenterModule) }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
