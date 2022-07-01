import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LayoutModule } from './layout/layout.module';
import { HomePageModule } from './pages/home/home.module';
import { HomePageComponent } from './pages/home/home.page';
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: HomePageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), LayoutModule, HomePageModule],
  exports: [RouterModule],
})
export class LandingRoutingModule {}
