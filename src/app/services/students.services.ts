import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SortColumn, SortDirection } from "../directives/sort.directive";
const compare = (v1: string | number, v2: string | number) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
function sort(students: any[], column: SortColumn, direction: string): any[] {
  console.log(students, column, direction);

    if (direction === '' || column === '') {
      return students;
    } else {
      return [...students].sort((a, b) => {
        const res = compare(a[column], b[column]);
        return direction === 'asc' ? res : -res;
      });
    }
  }
  interface State {
    page: number;
    pageSize: number;
    searchTerm: string;
    sortColumn: SortColumn;
    sortDirection: SortDirection;
  }
@Injectable({
    providedIn: 'root'
})

export class StudentsService {
    constructor(private http: HttpClient){}
    private _state: State = {
        page: 1,
        pageSize: 4,
        searchTerm: '',
        sortColumn: '',
        sortDirection: ''
      };
    getStudents(){
        return this.http.get('../assets/data/student-data.json');
    }
    set sortColumn(sortColumn: SortColumn) { this._set({sortColumn}); }
  set sortDirection(sortDirection: SortDirection) { this._set({sortDirection}); }

  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);

  }
  
}