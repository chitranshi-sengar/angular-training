import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

export interface LogData {
  type: string;
  time: Date; 
}
export interface Timer {
  timer: number;
  start: boolean; 
}
@Injectable({
  providedIn: "root",
})
export class TimerService {
  logData: BehaviorSubject<LogData> = new BehaviorSubject<LogData>(undefined);
  timer: BehaviorSubject<Timer> = new BehaviorSubject<Timer>(undefined);

  constructor() {}
}
