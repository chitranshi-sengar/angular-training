import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AppController} from '../../app.controller';
import { StudentsComponent } from './students.component';

const routes: Routes = [
  {
    path: '',
    component: StudentsComponent,
    data: {
      title: AppController.trans().students
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
