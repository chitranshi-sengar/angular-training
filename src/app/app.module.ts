import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ProductsService } from './services/products.services';
// import { StudentsService } from './services/students.services';
import { TimerService } from './services/timer.services';
import { ProductsEffects } from './store/effects/products.effect';
import { StudentsEffects } from './store/effects/students.effect';
import { ProductsReducer } from './store/reducers/products.reducer';
import { StudentsReducer } from './store/reducers/students.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    FormsModule,  
    ReactiveFormsModule,
    StoreModule.forRoot({
      products: ProductsReducer,
      students: StudentsReducer
    }, {}),
    EffectsModule.forRoot([
      ProductsEffects, StudentsEffects
    ])
  ],
  providers: [ProductsService, TimerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
