import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupComponentPage } from './group.page';
import { GroupListModule } from '../../components/group-list/group-list.module';
import { FlexLayoutModule } from '@angular/flex-layout';


const COMMON_IMPORTS=[CommonModule, GroupListModule,FlexLayoutModule];
const COMMON_DECLARATIONS=[GroupComponentPage]

@NgModule({
  exports:COMMON_DECLARATIONS,
  declarations: COMMON_DECLARATIONS,
  imports: COMMON_IMPORTS
})
export class GroupPageModule { }
