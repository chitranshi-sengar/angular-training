import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerComponent } from './timer/timer.component';
import { TimerRoutingModule } from './timer-routing.module';
import { TimerLogComponent } from './timer-log/timer-log.component';
import { InputTimerComponent } from './input-timer/input-timer.component';
import { CountDownTimerComponent } from './count-down-timer/count-down-timer.component';
import { CountClickTimerComponent } from './count-click-timer/count-click-timer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TimerComponent, TimerLogComponent, InputTimerComponent, CountDownTimerComponent, CountClickTimerComponent],
  imports: [
    CommonModule,
    FormsModule,
    TimerRoutingModule
  ]
})
export class TimerModule { }
