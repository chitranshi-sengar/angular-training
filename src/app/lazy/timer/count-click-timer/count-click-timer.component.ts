import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";

@Component({
  selector: "app-count-click-timer",
  templateUrl: "./count-click-timer.component.html",
  styleUrls: ["./count-click-timer.component.scss"],
})
export class CountClickTimerComponent implements OnInit, OnChanges {
  @Input() logData: any;
  start: number = 0;
  pause: number = 0;

  constructor() {}

  ngOnInit() {}
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    if (changes.logData.currentValue.time) {
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
