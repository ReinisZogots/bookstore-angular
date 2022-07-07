import { Injectable } from '@angular/core';
import { Product } from './Product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  booksInCart: Product[] = [];
  cartNotEmpty: boolean = false;
  constructor() {}

  addToCart(product: Product) {
    this.booksInCart.push(product);
    this.cartNotEmpty = true;
  }

  getItems() {
    return this.booksInCart;
  }

  // removeFromCart(product: Product) {
  //   this.booksInCart.(product);
  // }

  getBookPrice(product: Product) {
    return;
  }
}
