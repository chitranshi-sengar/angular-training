import { Component, Input, OnInit } from "@angular/core";
import { LogData, TimerService } from "src/app/services/timer.services";

@Component({
  selector: "app-timer-log",
  templateUrl: "./timer-log.component.html",
  styleUrls: ["./timer-log.component.scss"],
})
export class TimerLogComponent implements OnInit {
  @Input() logData: LogData;
  timerLog: LogData[] = [];
  constructor(private timerService: TimerService) {}

  ngOnInit() {
    this.timerService.logData.subscribe((data) => {
      if (data && data.time) {
        this.timerLog.push(data);
      } else {
        this.timerLog = [];
      }
    });
  }
}
