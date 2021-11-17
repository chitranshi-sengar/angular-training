import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import { Timer } from "src/app/services/timer.services";

@Component({
  selector: "app-count-down-timer",
  templateUrl: "./count-down-timer.component.html",
  styleUrls: ["./count-down-timer.component.scss"],
})
export class CountDownTimerComponent implements OnInit, OnChanges {
  @Input() timer: Timer;
  interval: any;
  showValue: number;
  constructor() {}

  ngOnInit() {}
  ngOnChanges(changes: SimpleChanges) {
    if (changes.timer.currentValue && changes.timer.currentValue.timer === null) {
      clearInterval(this.interval);
      this.showValue = null;
    }
    if (changes.timer.currentValue && changes.timer.currentValue.timer && changes.timer.currentValue.start) {
      this.showValue = this.showValue ? this.showValue : this.timer.timer;
      let timer = this.showValue;
      this.interval = setInterval(() => {
        this.showValue = --timer;
      }, 1000);
      setTimeout(() => {
        clearInterval(this.interval);
      }, this.showValue * 1000);
    }
    if (changes.timer.currentValue && !changes.timer.currentValue.start) {
      clearInterval(this.interval);
    }
  }
}
