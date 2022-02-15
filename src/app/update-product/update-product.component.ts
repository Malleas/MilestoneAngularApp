import { Component, OnInit } from '@angular/core';
import {Product} from "../models/Product";
import {ProductServiceService} from "../service/product-service.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  product:Product | any

  constructor(private service:ProductServiceService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.service.findProductById(params['id'], (returnedProduct:Product) => {
        this.product = returnedProduct
      })
    })
  }

  public onSubmit(){
    this.service.updateProduct(this.product, (status:string) => {
      window.alert(status)
    })
  }

}
