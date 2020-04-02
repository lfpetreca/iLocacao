import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PropertiesRoutingModule } from './properties-routing.module';
import { PropertiesComponent } from './components/properties/properties.component';
import { NewPropertiesComponent } from './components/new-properties/new-properties.component';
import { PropertiesDetailsComponent } from './components/properties-details/properties-details.component';
import { PropertiesListComponent } from './components/properties-list/properties-list.component';


@NgModule({
  declarations: [
    PropertiesComponent,
    NewPropertiesComponent,
    PropertiesDetailsComponent,
    PropertiesListComponent
  ],
  imports: [
    CommonModule,
    PropertiesRoutingModule,
    TranslateModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    NgbModule
  ]
})
export class PropertiesModule { }
