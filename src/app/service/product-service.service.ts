import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../models/Product";

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  hostname: string = "localhost:3000"

  constructor(private http:HttpClient) { }

  public findAllProducts(callback: any){
    this.http.get<Product[]>(this.hostname + "/products").subscribe((data) => {
      let products:Product[] = [];
      for(let i=0;i < data.length;++i){
        products.push(new Product(data[i]['id'], data[i]['productName'], data[i]["productDescription"],
          data[i]['productPrice'], data[i]['productQuantity']))
      }
      callback(products);
    });
  }

  public findProductById(id:number, callback: any){
    this.http.get<Product>(this.hostname + "/products/" + id).subscribe((data) =>{
      let product = new Product(data['id'], data['productName'], data['productDescription'], data['productPrice'], data['productQuantity'])
      callback(product)
    })
  }

  public createProduct(product:Product, callback:any){
    this.http.post<Product>(this.hostname + "/products", product).subscribe((data) =>{
      callback(data)
    })
  }

  public updateProduct(product:Product,  callback:any){
    this.http.put<Product>(this.hostname + "/products", product).subscribe((data) =>{
      callback(data)
    })
  }

  public deleteProduct(id:number, callback:any){
    this.http.delete<Product>(this.hostname + "/products/" + id).subscribe((data) =>{
      callback(data)
    })
  }
}
