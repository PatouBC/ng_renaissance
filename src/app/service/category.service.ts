import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Globals } from '../globals';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient, private router: Router) { }

  getCategories() {

    return this.http.get(Globals.APP_API + 'category');
  }
  getCategory(id: number) {
    return this.http.get(Globals.APP_API + 'category' + '/' + id);
  }

}
