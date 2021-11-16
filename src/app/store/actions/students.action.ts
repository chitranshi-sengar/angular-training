import { createAction, props } from '@ngrx/store';
import { Action } from '@ngrx/store';

export class FetchStudents implements Action {
    readonly type = '[Students] Fetch Students'
};
export class SetStudents implements Action {
    readonly type = '[Students] Set Students';
    constructor(public payload: any) {}
};

export type StudentsAction = FetchStudents|SetStudents;