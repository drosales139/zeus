import { NgModule } from '@angular/core';
import { EmployeesListComponent } from './employees-list.component';

import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

const COMMON_DECLARATIONS = [EmployeesListComponent];
const COMMON_IMPORTS = [
  CommonModule,
  MatTableModule,
  MatPaginatorModule,
  FlexLayoutModule,
  
];

@NgModule({
  declarations: COMMON_DECLARATIONS,
  imports: COMMON_IMPORTS,
  exports: COMMON_DECLARATIONS,
})
export class EmployeesListModule {}
