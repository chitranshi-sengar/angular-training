import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "app-dynamic-div",
  templateUrl: "./dynamic-div.component.html",
  styleUrls: ["./dynamic-div.component.scss"],
})
export class DynamicDivComponent implements OnInit {
  total: number = 10;
  totalContainers: any[] = [];
  isLoading$: Observable<boolean>;

  constructor() {}

  ngOnInit() {
    for (let i = 0; i < this.total; i++) {
      this.totalContainers.push({ id: i + 1 });
    }
  }
  clickBox(id) {
    alert("Button " + id + " is clicked");
  }
  onScroll() {
    console.log("scroll")
    for (let i = 0; i < 10; i++) {
      this.totalContainers.push({ id: this.totalContainers.length + 1 });
    }
    // this.totalContainers.push({ id: this.totalContainers.length+1 });
  }
}
