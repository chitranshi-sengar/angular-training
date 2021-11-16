import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AppController} from './app.controller';
import { HomeComponent } from './core/components/home/home.component';
import { routerConfig } from './core/config/router-config.const';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: AppController.trans().home
    }
  },
  {
    path: routerConfig.products.base,
    loadChildren: () => import('./lazy/products/products.module').then(mod => mod.ProductsModule)
  },
  {
    path: routerConfig.timer.base,
    loadChildren: () => import('./lazy/timer/timer.module').then(mod => mod.TimerModule)
  },
  {
    path: routerConfig.timer_subject.base,
    loadChildren: () => import('./lazy/timer-subject/timer-subject.module').then(mod => mod.TimerSubjectModule)
  },
  {
    path: routerConfig.students.base,
    loadChildren: () => import('./lazy/students/students.module').then(mod => mod.StudentsModule)
  },
  {
    path: routerConfig.dynamic_div.base,
    loadChildren: () => import('./lazy/dynamic-div/dynamic-div.module').then(mod => mod.DynamicDivModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
