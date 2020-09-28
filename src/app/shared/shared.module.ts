import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxMaskModule } from 'ngx-mask';

import { MaterialModule } from '../material.module';
import { DialogDeleteComponent } from './components/dialog/dialog-delete.component';

const modules = [
  CommonModule,
  MaterialModule,
  FlexLayoutModule,
  ReactiveFormsModule,
  HttpClientModule,
  NgxMaskModule
];

@NgModule({
  declarations: [DialogDeleteComponent],
  imports: [...modules],
  exports: [...modules, DialogDeleteComponent],
  entryComponents: [DialogDeleteComponent]
})
export class SharedModule { }
