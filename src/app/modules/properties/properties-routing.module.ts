import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PropertiesComponent } from './components/properties/properties.component';
import { PropertiesDetailsComponent } from './components/properties-details/properties-details.component';

const routes: Routes = [
  { path: '', component: PropertiesComponent, pathMatch: 'full' },
  { path: ':propertyId', component: PropertiesDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertiesRoutingModule { }
