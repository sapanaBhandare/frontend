import { Router } from '@angular/router';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss'],
})
export class ProductAddComponent implements OnInit {
  productForm: FormGroup;
  constructor(private productService: ProductService,
    private router:Router) {}
  ngOnInit(): void {
    this.setFormValidations();
    // this.editProduct();
  }
  setFormValidations() {
    this.productForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(75),
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(20),
        Validators.maxLength(500),
      ]),
      unit: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      suplierName: new FormControl('', [Validators.required]),
    });
  }
  addProduct(data) {
    data.banner='test banner',
    data.userId=localStorage.getItem('userId')
    this.productService.insertProduct(data).subscribe((res) => {
      this.router.navigate(['/product/list']);
    });
  }

  editProduct(){
    const data={
      "name": "laptop",
      "description": "best selle Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature fromr",
      "banner": "image",
      "unit": 20,
      "price": 1000,
      "isProductAvailable": true,
      "suplierName": "sapana",
      "createdAt": "2024-02-07T08:48:26.545Z",
      "updatedAt": "2024-02-07T08:48:26.545Z",
      "__v": 0,
      "userId": "65c25c59fe4f05d5da854911"
  }
    this.productForm.patchValue(data)
  }
}
