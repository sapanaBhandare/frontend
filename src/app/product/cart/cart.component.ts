import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartProducts;
  constructor(private cartService: CartService) {}
  ngOnInit(): void {
    this.getCartData();
  }
  getCartData() {
    this.cartService.getProductList().subscribe((res: []) => {
      this.cartProducts = res;
    });
  }
  removeProduct(product) {}
}
