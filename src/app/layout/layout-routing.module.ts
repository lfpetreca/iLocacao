import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';


const routes: Routes = [{
  path: '', component: LayoutComponent,
  children: [
    { path: '', redirectTo: 'home', pathMatch: 'prefix' },
    { path: 'home', loadChildren: () => import('../modules/home/home.module').then(m => m.HomeModule) },
    { path: 'lessees', loadChildren: () => import('../modules/lessees/lessees.module').then(m => m.LesseesModule) },
    { path: 'renters', loadChildren: () => import('../modules/renters/renters.module').then(m => m.RentersModule) }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
