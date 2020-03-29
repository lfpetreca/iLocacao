import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { PropertiesRoutingModule } from './properties-routing.module';
import { PropertiesComponent } from './properties.component';


@NgModule({
  declarations: [PropertiesComponent],
  imports: [
    CommonModule,
    PropertiesRoutingModule,
    TranslateModule
  ]
})
export class PropertiesModule { }
