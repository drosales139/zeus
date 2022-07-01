import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { HomePageComponent } from './home.page';

const COMMON_DECLARATIONS = [HomePageComponent];

const COMMON_MODULES = [
  CommonModule,
  FlexLayoutModule,
  RouterModule,
  IvyCarouselModule,
];

@NgModule({
  declarations: COMMON_DECLARATIONS,
  imports: COMMON_MODULES,
  exports: COMMON_DECLARATIONS,
})
export class HomePageModule {}

export default { COMMON_DECLARATIONS, COMMON_MODULES };
