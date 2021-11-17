import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable } from "rxjs";
import { map, mergeMap } from "rxjs/operators";
import { ProductsService } from "src/app/services/products.services";
import { SetProducts } from "../actions/products.action";

@Injectable()
export class ProductsEffects {
  constructor(private service: ProductsService, private actions$: Actions) {}

  @Effect()
  getProducts$: Observable<Object> = this.actions$.pipe(
    ofType("[Products] Fetch Products"),
    mergeMap(() =>
      this.service.getProducts().pipe(
        map((data) => {
          return new SetProducts(data);
        })
      )
    )
  );
}
