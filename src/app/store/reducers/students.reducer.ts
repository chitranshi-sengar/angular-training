import { StudentsAction } from "../actions/students.action";
import { Students } from "../models/students.model";

export interface StudentsState {
    students: Students[];
}

const initialState: StudentsState = {
    students: []
}
export function StudentsReducer(state: StudentsState = initialState, action: StudentsAction) {
    switch (action.type) {
        case '[Students] Fetch Students':
            return {
                ...state
            }
        case '[Students] Set Students':
            return {
                ...state,
                students: action.payload
            }
            default:{
                return state;
            }
    }
}