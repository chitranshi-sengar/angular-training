import { StudentsAction } from "../actions/students.action";

export interface StudentsState {
    students: any
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