import { Component } from '@angular/core';
import { Product } from '../../Product';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  public products: Product[] = [];
  public selectedBook?: Product;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  onSelected(product: Product): void {
    this.selectedBook = product;
  }

  getProducts(): void {
    this.productService.getProducts().subscribe((x) => (this.products = x));
  }
}
