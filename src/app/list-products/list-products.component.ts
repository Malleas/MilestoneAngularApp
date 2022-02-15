import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductServiceService} from "../service/product-service.service";
import {Product} from "../models/Product";

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  products:Product[] = []
  selectedProduct:any

  constructor(private route:ActivatedRoute, private service:ProductServiceService) { }

  ngOnInit(): void {
    this.service.findAllProducts((products:Product[]) =>{
      this.products = products
      this.selectedProduct = null
    })
  }

  public onSelectedProduct(product:Product){
    this.selectedProduct = product
  }



}
