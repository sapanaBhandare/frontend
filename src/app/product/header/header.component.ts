import { LoginService } from './../../services/login/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  userName;
  cartLength;
  constructor(
    private router: Router,
    private LoginService: LoginService,
    private cartService: CartService
  ) {}
  ngOnInit(): void {
    this.userName = localStorage.getItem('userName');
    this.getCartData()
  }
  logout() {
    localStorage.clear();
    this.LoginService.loggedIn.next(false);
    this.router.navigateByUrl('/');
  }
  getCartData() {
    this.cartService.getProductList().subscribe((res: []) => {
      this.cartLength = res.length;
    });
  }
}
