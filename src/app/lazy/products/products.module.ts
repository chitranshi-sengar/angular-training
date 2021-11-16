import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { UserModule } from '../../features/user/user.module';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';

@NgModule({
  imports: [
    CommonModule,
    UserModule,
    ProductsRoutingModule,
    ReactiveFormsModule,

  ],
  declarations: [ProductsComponent]
})
export class ProductsModule { }

