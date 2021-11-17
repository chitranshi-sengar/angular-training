import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable } from "rxjs";
import { map, mergeMap } from "rxjs/operators";
import { StudentsService } from "src/app/services/students.services";
import { SetStudents } from "../actions/students.action";
import { Students } from "../models/students.model";

@Injectable()
export class StudentsEffects {
  constructor(private service: StudentsService, private actions$: Actions) {}

  @Effect()
  getStudents$: Observable<Action> = this.actions$.pipe(
    ofType("[Students] Fetch Students"),
    mergeMap(() =>
      this.service.getStudents().pipe(
        map((data: Students[]) => {
          return new SetStudents(data);
        })
      )
    )
  );
}
