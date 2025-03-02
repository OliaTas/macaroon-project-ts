import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  count: number = 0;
  amount: number = 0;

  constructor() { }

  addToCart(price: number): void {
    this.count++;
    this.amount += price;
  }
}
