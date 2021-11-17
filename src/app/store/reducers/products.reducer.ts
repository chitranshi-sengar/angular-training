import { ProductsAction } from "../actions/products.action";
import { Products } from "../models/products.model";

export interface ProductsState {
    products: Products[];
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