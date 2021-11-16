import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AppController} from '../../app.controller';
import { ProductsComponent } from './products.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    data: {
      title: AppController.trans().products
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
