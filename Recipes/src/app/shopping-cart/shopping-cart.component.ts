import { Component, OnInit } from '@angular/core';
import {ShoppingCartItem} from "../models/shopping-cart-item.model";


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  items: ShoppingCartItem[] = [];

  name: string = "";
  amount: number = 1;

  constructor() {
    let existedItems = localStorage.getItem('shopping-list');
    if (existedItems) {
      this.items = JSON.parse(existedItems)
    } else {
      this.items = []
    }
  }

  addItem(): void {
    if (this.name && this.amount) {
      this.items.push(new ShoppingCartItem(this.name, this.amount))
      localStorage.setItem('shopping-list', JSON.stringify(this.items))
    } else {
      alert("Name and amount cannot be empty")
    }
  }

  deleteItem(i: number): void {
    this.items.splice(i , 1)
    localStorage.setItem('shopping-list', JSON.stringify(this.items))
  }

  ngOnInit(): void {
  }

}
