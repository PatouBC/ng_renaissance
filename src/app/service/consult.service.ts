import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Globals } from '../globals';


@Injectable({
  providedIn: 'root'
})
export class ConsultService {

  constructor(private http: HttpClient) { }

  getConsults() {

    return this.http.get(Globals.APP_API + 'typeconsult');
  }
}
