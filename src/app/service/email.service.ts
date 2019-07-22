import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Globals} from '../globals';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient, private router: Router) { }

  getEmailsByUser(userId: number) {
    return this.http.get(Globals.APP_API + 'message?user=' + userId);
  }

  createEmail(data) {
    const obj = {
      name: data.name,
      firstname: data.firstname,
      address: data.address,
      object: data.object,
      message: data.message};
    return this.http.post(Globals.APP_API + 'message/new', obj);
  }


}
