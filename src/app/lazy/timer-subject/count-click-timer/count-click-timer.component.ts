import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import { TimerService } from "src/app/services/timer.services";

@Component({
  selector: "app-count-click-timer",
  templateUrl: "./count-click-timer.component.html",
  styleUrls: ["./count-click-timer.component.scss"],
})
export class CountClickTimerComponent implements OnInit, OnChanges {
  @Input() logData: any;
  start: number = 0;
  pause: number = 0;

  constructor(private timerService: TimerService) {}

  ngOnInit() {
    this.timerService.logData.subscribe(data=>{
      if (data.time) {
        if (data.type === "start") {
          this.start++;
        } else if (data.type === "pause") {
          this.pause++;
        }
      } else {
        this.start = 0;
        this.pause = 0;
      }
    })

  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    // if (data.time) {
    //   if (data.type === "start") {
    //     this.start++;
    //   } else if (data.type === "pause") {
    //     this.pause++;
    //   }
    // } else {
    //   this.start = 0;
    //   this.pause = 0;
    // }
  }
}
