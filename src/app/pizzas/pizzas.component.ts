import { Component, OnInit } from '@angular/core';
import {Pizza} from '../pizza';
import {PIZZAS} from '../mock-pizza'
@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent implements OnInit {
  // pizza:Pizza = {
  //   id:1,
  //   name:'makaroni',
  //   toppings:'new pizza with cheese'
  // };

  pizzas = PIZZAS;

  constructor() { }

  ngOnInit(): void {
  }

}
