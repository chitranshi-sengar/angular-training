import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AppController} from '../../app.controller';
import { DynamicDivComponent } from './dynamic-div.component';

const routes: Routes = [
  {
    path: '',
    component: DynamicDivComponent,
    data: {
      title: AppController.trans().dynamic_div
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicDivRoutingModule { }
