import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { EmployeesListComponent } from './employees-list.component';
import {MatIconModule} from '@angular/material/icon';
const COMMON_DECLARATIONS = [EmployeesListComponent];
const COMMON_IMPORTS = [
  CommonModule,
  MatTableModule,
  MatPaginatorModule,
  FlexLayoutModule,
  MatInputModule,
  MatIconModule
];

@NgModule({
  declarations: COMMON_DECLARATIONS,
  imports: COMMON_IMPORTS,
  exports: COMMON_DECLARATIONS,
})
export class EmployeesListModule {}
