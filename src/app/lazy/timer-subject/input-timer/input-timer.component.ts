import { identifierModuleUrl } from "@angular/compiler";
import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { TimerService } from "src/app/services/timer.services";

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
  constructor(private timerService: TimerService) {}

  ngOnInit() {}

  startPauseTimer(value: number) {
    if (value) {
      this.start = !this.start;
      if (this.start) {
        this.timerService.logData.next({ type: "start", time: new Date() });
      } else {
        this.timerService.logData.next({ type: "pause", time: new Date() });
      }
      this.timerService.timer.next({ timer: value, start: this.start });
    }
  }
  resetTimer() {
    this.timer = null;
    this.start = false;
    this.timerService.logData.next({ type: "reset", time: new Date() });
    this.timerService.timer.next({ timer: null, start: this.start });
  }
}
