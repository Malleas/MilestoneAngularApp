import { Component, OnInit, Input } from '@angular/core';
import {ProductServiceService} from "../service/product-service.service";
import {ActivatedRoute} from "@angular/router";
import {Product} from "../models/Product";

@Component({
  selector: 'app-display-product',
  templateUrl: './display-product.component.html',
  styleUrls: ['./display-product.component.css']
})
export class DisplayProductComponent implements OnInit {

  @Input() product:any

  foo:Product | any


  constructor(private service:ProductServiceService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.service.findProductById(params['id'], (product:Product) => {
        this.foo = product
      })
    })
  }

}
