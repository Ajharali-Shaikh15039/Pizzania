import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PizzasComponent } from './pizzas/pizzas.component';
import { AuthModule } from './auth/auth.module';
import { RouterModule } from '@angular/router';
import { SliderComponent } from './slider/slider.component';
import { SlotbookingComponent } from './slotbooking/slotbooking.component';
import { HttpClientModule } from '@angular/common/http';
// import { FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PizzasComponent,
    SliderComponent,
    SlotbookingComponent,
    PaymentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
