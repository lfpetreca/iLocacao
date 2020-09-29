import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { MatChipsModule } from '@angular/material/chips';

const modules = [
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatCheckboxModule,
  MatSelectModule,
  MatSnackBarModule,
  MatCardModule,
  MatTabsModule,
  MatProgressSpinnerModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatStepperModule,
  MatDialogModule,
  MatRadioModule,
  MatChipsModule
];

@NgModule({
  imports: [...modules],
  exports: [...modules]
})
export class MaterialModule { }
