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

  startPauseTimer(value: string) {
    console.log(value);
    if (value) {
      this.start = !this.start;
      if (this.start) {
        // this.logEvent.emit({ type: "start", time: new Date() });
        this.timerService.logData.next({ type: "start", time: new Date() });
      } else {
        this.timerService.logData.next({ type: "pause", time: new Date() });
        // this.logEvent.emit({ type: "pause", time: new Date() });
      }
      this.timerService.timer.next({ timer: value, start: this.start });
      // this.timerEvent.emit({ timer: value, start: this.start });
    }
  }
  resetTimer() {
    this.timer = null;
    this.timerService.logData.next({ type: null, time: null });
    this.timerService.timer.next({ timer: null, start: this.start });
    // this.timerEvent.emit({ timer: null, start: this.start });
    // this.logEvent.emit({ type: null, time: null });
  }
}
