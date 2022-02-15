import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateProductComponent} from "./create-product/create-product.component";
import {UpdateProductComponent} from "./update-product/update-product.component";
import {DeleteProductComponent} from "./delete-product/delete-product.component";
import {ListProductsComponent} from "./list-products/list-products.component";
import {DisplayProductComponent} from "./display-product/display-product.component";

const routes: Routes = [
  {path: 'create', component: CreateProductComponent},
  {path: 'update/:id', component: UpdateProductComponent},
  {path: 'delete/:id', component: DeleteProductComponent},
  {path: 'list-product', component: ListProductsComponent},
  {path: 'display/:id', component: DisplayProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
