import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Globals } from '../globals';


@Injectable({
  providedIn: 'root'
})
export class IndicationService {

  constructor(private http: HttpClient) { }

  getIndications() {
    return this.http.get(Globals.APP_API + 'indication');
  }

  getIndicationById(id: number) {
    return this.http.get(Globals.APP_API + 'indication/' + id);
  }
}
