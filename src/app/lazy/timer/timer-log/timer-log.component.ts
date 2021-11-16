import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";

@Component({
  selector: "app-timer-log",
  templateUrl: "./timer-log.component.html",
  styleUrls: ["./timer-log.component.scss"],
})
export class TimerLogComponent implements OnInit, OnChanges {
  @Input() logData: any;
  timerLog: any = [];
  constructor() {}

  ngOnInit() {}
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    if (changes.logData.currentValue.time) {
      this.timerLog.push(changes.logData.currentValue);
    } else {
      this.timerLog = [];
    }
  }
}
