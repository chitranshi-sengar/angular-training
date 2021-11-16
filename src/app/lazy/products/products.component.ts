import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { FetchProducts } from "src/app/store/actions/products.action";
import AppState from "src/app/store/state/products.state";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
})
export class ProductsComponent implements OnInit {
  products$: Observable<any>;
  grid: boolean;
  form = new FormGroup({
    priceFilter: new FormControl("", Validators.required),
  });
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.grid = true;
    this.store.dispatch(new FetchProducts());
    this.products$ = this.store.select((store) => store.products.products);
    // this.products$.subscribe(data=>{
    //   console.log(data)
    // })
  }
  changeView(view) {
    this.grid = view;
  }
  changeSorting() {
    console.log(typeof this.form.controls.priceFilter.value);
    if (this.form.controls.priceFilter.value === "1") {
      this.products$ = this.store.select((store) =>
        store.products.products.sort((a, b) =>
          a.price > b.price ? 1 : b.price > a.price ? -1 : 0
        )
      );
    } else {
      this.products$ = this.store.select((store) =>
        store.products.products.sort((a, b) =>
          b.price > a.price ? 1 : a.price > b.price ? -1 : 0
        )
      );
    }
  }
}
