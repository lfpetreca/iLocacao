import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoreComponent } from './core.component';

const routes: Routes = [{
  path: '', component: CoreComponent,
  children: [
    { path: '', loadChildren: () => import('../modules/home/home.module').then(m => m.HomeModule) },
    { path: 'lessees', loadChildren: () => import('../modules/lessees/lessees.module').then(m => m.LesseesModule) },
    { path: 'renters', loadChildren: () => import('../modules/renters/renters.module').then(m => m.RentersModule) },
    { path: 'properties', loadChildren: () => import('../modules/properties/properties.module').then(m => m.PropertiesModule) }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
