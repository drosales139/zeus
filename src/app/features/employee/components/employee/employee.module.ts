import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { EmployeeComponent } from './employee.component';
import {MatDatepickerModule} from '@angular/material/datepicker';

const COMMON_DECLARATIONS = [EmployeeComponent];
const COMMON_IMPORTS = [
  CommonModule,
  ReactiveFormsModule,
  FormsModule,
  MatFormFieldModule,
  MatInputModule,
  FlexLayoutModule,
  MatSelectModule,
  MatDatepickerModule
];

@NgModule({
  declarations: COMMON_DECLARATIONS,
  imports: COMMON_IMPORTS,
  exports: COMMON_DECLARATIONS,
})
export class EmployeeComponentModule {}
