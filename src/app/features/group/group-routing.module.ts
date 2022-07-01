import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../landing/layout/layout.component';
import { LayoutModule } from '../landing/layout/layout.module';
import { GroupPageModule } from './page/group/group.module';
import { GroupComponentPage } from './page/group/group.page';

const routes: Routes = [ {
  path: '',
  component: LayoutComponent,
  children: [
    {
      path: '',
      pathMatch: 'full',
      component:GroupComponentPage
    },
  ],
},];

@NgModule({
  imports: [RouterModule.forChild(routes),LayoutModule,GroupPageModule],
  exports: [RouterModule]
})
export class GroupRoutingModule { }
