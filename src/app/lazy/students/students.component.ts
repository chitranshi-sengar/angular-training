import { Component, OnInit, QueryList, ViewChildren } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import {
  SortableHeader,
  SortColumn,
  SortEvent,
} from "src/app/directives/sort.directive";
import { StudentsService } from "src/app/services/students.services";
import {
  FetchStudents,
  SetStudents,
} from "src/app/store/actions/students.action";
import AppState from "src/app/store/state/students.state";

@Component({
  selector: "app-students",
  templateUrl: "./students.component.html",
  styleUrls: ["./students.component.scss"],
})
export class StudentsComponent implements OnInit {
  students$: Observable<any>;
  tableHeader: any;
  studentData: any;
  @ViewChildren(SortableHeader) headers: QueryList<SortableHeader>;

  constructor(
    private store: Store<AppState>,
    private service: StudentsService
  ) {}

  ngOnInit() {
    this.store.dispatch(new FetchStudents());
    this.students$ = this.store.select((store) => store.students.students);
    this.students$.subscribe((data) => {
      if (data.length > 0) {
        this.tableHeader = Object.keys(data[0]);
        console.log(this.tableHeader);
        this.studentData = data;
      }
    });
  }
  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    console.log(column, direction);
    this.headers.forEach((header) => {
      if (header.sortable !== column) {
        header.direction = "";
      }
    });

    let data = this.sort(this.studentData, column, direction);
    this.store.dispatch(new SetStudents(data));
    // console.log(this.studentData)
    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
  sort(students: any[], column: SortColumn, direction: string): any[] {
    // console.log(students, column, direction);

    if (direction === "" || column === "") {
      // return students;
      return [...students].sort((a, b) => {
        const res = this.compare(a["id"], b["id"]);
        return res;
      });
    } else {
      return [...students].sort((a, b) => {
        const res = this.compare(a[column], b[column]);
        return direction === "asc" ? res : -res;
      });
    }
  }
  compare = (v1: string | number, v2: string | number) =>
    v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
}
