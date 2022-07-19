import { Injectable } from '@angular/core';
import { Book } from './shared/models/book';
import { Cart } from './shared/models/Cart';
import { CartItem } from './shared/models/CartItem';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Cart = new Cart();
  isCartNotEmpty: boolean = false;
  constructor() {}

  addToCart(book: Book): void {
    let cartItem = this.cart.items.find((item) => item.book.id === book.id);
    if (cartItem) {
      this.changeQuantity(book.id, cartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItem(book));
    this.isCartNotEmpty = true;
  }

  removeFromCart(productId: number): void {
    this.cart.items = this.cart.items.filter(
      (item) => item.book.id != productId
    );
  }

  changeQuantity(bookId: number, quantity: number) {
    let cartItem = this.cart.items.find((item) => item.book.id === bookId);
    if (!cartItem) return;
    cartItem.quantity = quantity;
  }

  getCart(): Cart {
    return this.cart;
  }
}
