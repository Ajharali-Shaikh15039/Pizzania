import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentComponent } from './payment/payment.component';
import { PizzasComponent } from './pizzas/pizzas.component';
import { SliderComponent } from './slider/slider.component';
import { SlotbookingComponent } from './slotbooking/slotbooking.component';

const routes: Routes = [
  {path:'menu', component: PizzasComponent},
  {path:'bookslot',component:SlotbookingComponent},
  {path:'payment',component:PaymentComponent},
  {path:'', component: SliderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
