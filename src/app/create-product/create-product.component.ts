import { Component, OnInit } from '@angular/core';
import {Product} from "../models/Product";
import {ProductServiceService} from "../service/product-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  id: number = NaN
  productName:string = ""
  productDescription:string = ""
  productPrice:number = 0
  productQuantity:number = 0

  constructor(private service:ProductServiceService, private redirect:Router) { }

  ngOnInit(): void {
  }

  public onSubmit(){
    let newProduct = new Product(this.id, this.productName, this.productDescription, this.productPrice, this.productQuantity)
    this.service.createProduct(newProduct, (status:string) =>{
      window.alert(status)
      this.redirect.navigate(['list-product'])
    })
  }

}
