import { Component, OnInit } from '@angular/core';
import {ProductServiceService} from "../service/product-service.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  constructor(private service:ProductServiceService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.service.deleteProduct(params['id'], (status: string) => {
        window.alert(status)
      })
    })
  }

}
