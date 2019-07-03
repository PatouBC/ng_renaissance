import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Globals} from '../globals';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient, private router: Router) { }

  getProducts() {
    return this.http.get( Globals.APP_API + 'product');
  }

  getProductsByCategory(categoryId: number) {
    return this.http.get( Globals.APP_API + 'product?category=' + categoryId);
  }


  getProductById(id: number) {
    return this.http.get(Globals.APP_API + 'product' + '/' + id);
  }

}
