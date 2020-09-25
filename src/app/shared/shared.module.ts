import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxMaskModule } from 'ngx-mask';

import { MaterialModule } from '../material.module';

const modules = [
  CommonModule,
  MaterialModule,
  FlexLayoutModule,
  ReactiveFormsModule,
  HttpClientModule,
  NgxMaskModule
];

@NgModule({
  imports: [...modules],
  exports: [...modules]
})
export class SharedModule { }
