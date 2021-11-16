import { identifierModuleUrl } from "@angular/compiler";
import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-input-timer",
  templateUrl: "./input-timer.component.html",
  styleUrls: ["./input-timer.component.scss"],
})
export class InputTimerComponent implements OnInit {
  timer: number;
  @Output() timerEvent = new EventEmitter<object>();
  @Output() logEvent = new EventEmitter<object>();
  start: boolean;
  constructor() {}

  ngOnInit() {}

  startPauseTimer(value: string) {
    console.log(value);
    if (value) {
      this.start = !this.start;
      if (this.start) {
        this.logEvent.emit({ type: "start", time: new Date() });
      } else {
        this.logEvent.emit({ type: "pause", time: new Date() });
      }
      this.timerEvent.emit({ timer: value, start: this.start });
    }
  }
  resetTimer() {
    this.timer = null;
    this.start = false;
    this.timerEvent.emit({ timer: null, start: this.start });
    this.logEvent.emit({ type: "reset", time: new Date() });
  }
}
