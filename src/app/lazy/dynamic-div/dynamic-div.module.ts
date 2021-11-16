import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicDivComponent } from './dynamic-div.component';
import { DynamicDivRoutingModule } from './dynamic-div-routing.module';
import { InfiniteScrollComponent } from './infinite-scroll/infinite-scroll.component';

@NgModule({
  declarations: [DynamicDivComponent, InfiniteScrollComponent],
  imports: [
    CommonModule,
    DynamicDivRoutingModule,
  ]
})
export class DynamicDivModule { }
