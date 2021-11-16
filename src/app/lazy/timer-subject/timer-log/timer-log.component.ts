import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import { TimerService } from "src/app/services/timer.services";

@Component({
  selector: "app-timer-log",
  templateUrl: "./timer-log.component.html",
  styleUrls: ["./timer-log.component.scss"],
})
export class TimerLogComponent implements OnInit, OnChanges {
  @Input() logData: any;
  timerLog: any = [];
  constructor(private timerService: TimerService) {}

  ngOnInit() {
    this.timerService.logData.subscribe(data=>{
      if (data.time) {
        this.timerLog.push(data);
      } else {
        this.timerLog = [];
      }
    })
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    // if (data.time) {
    //   this.timerLog.push(data);
    // } else {
    //   this.timerLog = [];
    // }
  }
}
