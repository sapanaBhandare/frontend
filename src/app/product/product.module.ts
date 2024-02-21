import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { NotifierModule } from 'angular-notifier';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductAddComponent,
    HeaderComponent,
    HomeComponent,
    CartComponent,
  ],
  exports:[HeaderComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NotifierModule
  ],
})
export class ProductModule {}
