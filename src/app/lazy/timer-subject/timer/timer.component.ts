import { Component, OnInit } from '@angular/core';
import { LogData } from 'src/app/services/timer.services';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  timer: number;
  logData: LogData

  constructor() { }

  ngOnInit() {
  }
  updateTimer(event){
    this.timer = event;
  }
  updatelog(event){
    this.logData = event;
  }
}
