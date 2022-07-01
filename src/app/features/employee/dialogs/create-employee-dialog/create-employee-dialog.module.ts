import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEmployeeDialogComponent } from './create-employee-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EmployeeComponentModule } from '../../components/employee/employee.module';


const COMMON_IMPORTS = [
  CommonModule,
  MatDialogModule,
  MatButtonModule,
  FlexLayoutModule,
  EmployeeComponentModule
];

const COMMON_DECLARATIONS = [CreateEmployeeDialogComponent];

@NgModule({
  imports: COMMON_IMPORTS,
  declarations: COMMON_DECLARATIONS,
  exports: COMMON_DECLARATIONS,
  entryComponents: COMMON_DECLARATIONS,
})

export class CreateEmployeeDialogModule { }
