import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../landing/layout/layout.component';
import { LayoutModule } from '../landing/layout/layout.module';
import { EmployeePageModule } from './pages/employee/employee.module';
import { EmployeeComponentPage } from './pages/employee/employee.page';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: EmployeeComponentPage,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), LayoutModule, EmployeePageModule],
  exports: [RouterModule],
})
export class EmployeeRoutingModule {}
