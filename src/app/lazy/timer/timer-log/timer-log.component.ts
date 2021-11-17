import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import { LogData } from "src/app/services/timer.services";

@Component({
  selector: "app-timer-log",
  templateUrl: "./timer-log.component.html",
  styleUrls: ["./timer-log.component.scss"],
})
export class TimerLogComponent implements OnInit, OnChanges {
  @Input() logData: LogData;
  timerLog: LogData[] = [];
  constructor() {}

  ngOnInit() {}
  ngOnChanges(changes: SimpleChanges) {
    if (changes.logData.currentValue && changes.logData.currentValue.time) {
      this.timerLog.push(changes.logData.currentValue);
    } else {
      this.timerLog = [];
    }
  }
}
