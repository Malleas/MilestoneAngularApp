import { Component, OnInit } from '@angular/core';
import {Product} from "../models/Product";
import {ProductServiceService} from "../service/product-service.service";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  product:Product | any

  constructor(private service:ProductServiceService) { }

  ngOnInit(): void {
  }

  public onSubmit(){
    let newProduct = new Product(this.product.id, this.product.productName, this.product.productDescription, this.product.productPrice, this.product.productQuantity)
    this.service.createProduct(newProduct, (status:string) =>{
      window.alert(status)
    })
  }

}
