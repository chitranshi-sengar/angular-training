import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  timer:number;
  logData: any

  constructor() { }

  ngOnInit() {
  }
  updateTimer(event){
    this.timer = event;
  }
  updatelog(event){
    console.log(event)
    this.logData = event;
  }
}
