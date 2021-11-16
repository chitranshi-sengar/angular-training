import { createAction, props } from '@ngrx/store';
import { Action } from '@ngrx/store';

export class FetchProducts implements Action {
    readonly type = '[Products] Fetch Products'
};
export class SetProducts implements Action {
    readonly type = '[Products] Set Products';
    constructor(public payload: any) {}
};

export type ProductsAction = FetchProducts|SetProducts;