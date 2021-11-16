import { ProductsAction } from "../actions/products.action";

export interface ProductsState {
    products: any
}

const initialState: ProductsState = {
    products: []
}
export function ProductsReducer(state: ProductsState = initialState, action: ProductsAction) {
    switch (action.type) {
        case '[Products] Fetch Products':
            return {
                ...state
            }
        case '[Products] Set Products':
            return {
                ...state,
                products: action.payload
            }
            default:{
                return state;
            }
    }
}