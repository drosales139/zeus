import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupListComponent } from './group-list.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
const COMMON_DECLARATIONS = [GroupListComponent];
const COMMON_IMPORTS = [
  CommonModule,
  DragDropModule,
  FlexLayoutModule,
  MatCheckboxModule,
  FormsModule,
  MatButtonModule,
  MatInputModule,
  MatIconModule,
];

@NgModule({
  declarations: COMMON_DECLARATIONS,
  imports: COMMON_IMPORTS,
  exports: COMMON_DECLARATIONS,
})
export class GroupListModule {}
