import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Globals} from '../globals';

@Injectable({
  providedIn: 'root'
})
export class ActuService {

  constructor(private http: HttpClient, private router: Router) { }

  getActus() {
    return this.http.get(Globals.APP_API + 'actu');
  }
}
