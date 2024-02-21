import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  productsList: any;

  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.productService.getProductList().subscribe((res: any) => {
      this.productsList = res;
    });
  }
  editProduct(product) {
    console.log('edit', product);
  }
  deleteProduct(product) {
    Swal.fire({
      title: 'Are you sure want Delete?',
      text: 'You will not be able to recover this !',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {
      if (result.isConfirmed) {
        this.productService.deleteProduct(product._id).subscribe((res) => {
          this.getList();
        });
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your file is safe :)', 'error');
      }
    });
  }
}
