import { createAction, props } from '@ngrx/store';
import { Action } from '@ngrx/store';
import { Products } from '../models/products.model';

export class FetchProducts implements Action {
    readonly type = '[Products] Fetch Products'
};
export class SetProducts implements Action {
    readonly type = '[Products] Set Products';
    constructor(public payload: Products[]) {}
};

export type ProductsAction = FetchProducts|SetProducts;