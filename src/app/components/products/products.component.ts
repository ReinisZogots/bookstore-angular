import { Component } from '@angular/core';
import { Product } from '../../Product';
import { PRODUCTS } from '../../mock-products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  public products: Product[] = PRODUCTS;

  constructor() {}
}
