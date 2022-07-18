import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CreateNewComponent } from './pages/create-new/create-new.component';
import { DeleteByIdComponent } from './pages/delete-by-id/delete-by-id.component';
import { FindByIdComponent } from './pages/find-by-id/find-by-id.component';
import { GetAllComponent } from './pages/get-all/get-all.component';
import { UpdateByIdComponent } from './pages/update-by-id/update-by-id.component';



@NgModule({
  declarations: [
    CreateNewComponent,
    DeleteByIdComponent,
    FindByIdComponent,
    GetAllComponent,
    UpdateByIdComponent
  ],
  exports: [
    CreateNewComponent,
    DeleteByIdComponent,
    FindByIdComponent,
    GetAllComponent,
    UpdateByIdComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class EmployeeModule { }
