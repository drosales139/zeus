import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/landing/landing.module').then(m => m.LandingModule),
  },
  {
    path: 'employees',
    loadChildren: () =>
      import('./features/employee/employee.module').then(m=>m.EmployeeModule),
  },
  // {
  //   path: 'groups',
  //   // canActivate: [AuthenticationGuard],
  //   loadChildren: () =>
  //     import('./features/orders/order.module').then(m => m.OrderModule),
  // },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
