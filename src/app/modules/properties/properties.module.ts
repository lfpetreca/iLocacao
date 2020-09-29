import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '../../shared/shared.module';
import { PropertiesRoutingModule } from './properties-routing.module';
import { PropertiesComponent } from './components/properties/properties.component';
import { PropertiesDetailsComponent } from './components/properties-details/properties-details.component';
import { PropertiesListComponent } from './components/properties-list/properties-list.component';
import { NewPropertiesComponent } from './components/new-properties/new-properties.component';
import { propertyReducer } from './properties.reducers';

@NgModule({
  declarations: [
    PropertiesComponent,
    PropertiesDetailsComponent,
    PropertiesListComponent,
    NewPropertiesComponent
  ],
  imports: [
    SharedModule,
    PropertiesRoutingModule,
    StoreModule.forFeature('properties', propertyReducer)
  ]
})
export class PropertiesModule { }
