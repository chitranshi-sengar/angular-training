import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class StudentsService {
  constructor(private http: HttpClient) {}

  getStudents() {
    return this.http.get("../assets/data/student-data.json");
  }
}
