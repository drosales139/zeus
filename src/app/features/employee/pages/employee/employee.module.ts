import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { EmployeesListModule } from '../../components/employees-list/employees-list.module';
import { CreateEmployeeDialogModule } from '../../dialogs/create-employee-dialog/create-employee-dialog.module';
import { EmployeeComponentPage } from './employee.page';

const COMMON_DECLARATIONS = [EmployeeComponentPage];
const COMMON_IMPORTS = [
  CommonModule,
  EmployeesListModule,
  CreateEmployeeDialogModule,
  FlexLayoutModule,
  MatButtonModule,
];

@NgModule({
  declarations: COMMON_DECLARATIONS,
  imports: COMMON_IMPORTS,
  exports: COMMON_DECLARATIONS,
})
export class EmployeePageModule {}
