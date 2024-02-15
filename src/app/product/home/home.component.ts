import { CartService } from './../../services/cart/cart.service';
import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  productsList: any;
  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}
  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.productService.getProductList().subscribe((res: any) => {
      this.productsList = res;
    });
  }
  addToCart(product) {
    const body = {
      userId: localStorage.getItem('userId'),
      name: product.name,
      price: product.price,
      quantity: 1,
      productId: product._id,
    };
    console.log('add to cart', product, body);

    this.cartService.insertProduct(body).subscribe((res) => {
      console.log('product to cart inserted', res);
    });
  }
}
