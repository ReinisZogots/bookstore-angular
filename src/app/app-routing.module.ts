import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductItemDetailsComponent } from './components/product-item-details/product-item-details.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'detail/:id', component: ProductItemDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
