import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  productsList: any;
  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.getList()
  }

  getList() {
    this.productService.getProductList().subscribe((res: any) => {
      this.productsList = res;
    });
  }
  editProduct(product){
    console.log('edit',product)
  }
  deleteProduct(product){
    this.productService.deleteProduct(product._id).subscribe((res)=>{
      this.getList();
    })
  }

}
