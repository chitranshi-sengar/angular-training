import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';
import { StudentsRoutingModule } from './students-routing.module';
import { SortableHeader } from 'src/app/directives/sort.directive';

@NgModule({
  declarations: [StudentsComponent, SortableHeader],
  imports: [
    CommonModule,
    StudentsRoutingModule
  ]
})
export class StudentsModule { }
