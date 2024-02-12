import { ProductAddComponent } from './product-add/product-add.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductEditComponent } from './product-edit/product-edit.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'list',
    pathMatch:"prefix"
  },
  {
    path:'list',
    component:ProductListComponent
  },
  {
    path:'edit/:id',
    component:ProductEditComponent,
  },
  {
    path:'add',
    component:ProductAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
