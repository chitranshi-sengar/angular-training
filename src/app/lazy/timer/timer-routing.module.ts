import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AppController} from '../../app.controller';
import { TimerComponent } from './timer/timer.component';

const routes: Routes = [
  {
    path: '',
    component: TimerComponent,
    data: {
      title: AppController.trans().timer
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimerRoutingModule { }
