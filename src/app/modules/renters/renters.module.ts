import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { RentersRoutingModule } from './renters-routing.module';
import { RentersComponent } from './renters.component';


@NgModule({
  declarations: [RentersComponent],
  imports: [
    CommonModule,
    RentersRoutingModule,
    TranslateModule
  ]
})
export class RentersModule { }
