import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TimerService {
  //   logData: any;
  //   timer: any;
  logData: BehaviorSubject<any> = new BehaviorSubject<any>({});
  timer: BehaviorSubject<any> = new BehaviorSubject<any>({});

  constructor() {}
}
