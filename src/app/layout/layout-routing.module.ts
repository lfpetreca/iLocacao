import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';


const routes: Routes = [{
  path: '', component: LayoutComponent,
  children: [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', loadChildren: () => import('../modules/index/index.module').then(m => m.IndexModule) },
    { path: 'properties', loadChildren: () => import('../modules/properties/properties.module').then(m => m.PropertiesModule) },
    { path: 'lessees', loadChildren: () => import('../modules/lessees/lessees.module').then(m => m.LesseesModule) },
    { path: 'renters', loadChildren: () => import('../modules/renters/renters.module').then(m => m.RentersModule) },
    { path: 'account', loadChildren: () => import('../modules/account/account.module').then(m => m.AccountModule) }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
