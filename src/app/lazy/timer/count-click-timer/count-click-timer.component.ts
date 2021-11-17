import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import { LogData } from "src/app/services/timer.services";

@Component({
  selector: "app-count-click-timer",
  templateUrl: "./count-click-timer.component.html",
  styleUrls: ["./count-click-timer.component.scss"],
})
export class CountClickTimerComponent implements OnInit, OnChanges {
  @Input() logData: LogData;
  start: number = 0;
  pause: number = 0;

  constructor() {}

  ngOnInit() {}
  ngOnChanges(changes: SimpleChanges) {
    if (changes.logData.currentValue && changes.logData.currentValue.time) {
      if (changes.logData.currentValue.type === "start") {
        this.start++;
      } else if (changes.logData.currentValue.type === "pause") {
        this.pause++;
      }
    } else {
      this.start = 0;
      this.pause = 0;
    }
  }
}
