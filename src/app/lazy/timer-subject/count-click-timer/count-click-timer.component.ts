import {
  Component,
  Input,
  OnInit,
} from "@angular/core";
import { LogData, TimerService } from "src/app/services/timer.services";

@Component({
  selector: "app-count-click-timer",
  templateUrl: "./count-click-timer.component.html",
  styleUrls: ["./count-click-timer.component.scss"],
})
export class CountClickTimerComponent implements OnInit {
  @Input() logData: LogData;
  start: number = 0;
  pause: number = 0;

  constructor(private timerService: TimerService) {}

  ngOnInit() {
    this.timerService.logData.subscribe(data=>{
      if (data && data.time) {
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
}
