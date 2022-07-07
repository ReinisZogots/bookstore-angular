import { Component } from '@angular/core';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  booksInCart = this.cartService.getItems();
  cartNotEmpty = this.cartService.cartNotEmpty;

  constructor(private cartService: CartService) {}

  removeFromCart(product) {
    this.booksInCart = this.booksInCart.filter((t) => t.id !== product.id);
    if ((this.booksInCart = [])) {
      this.cartNotEmpty = false;
    }
  }
}
