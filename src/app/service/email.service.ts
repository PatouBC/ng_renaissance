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

  getEmail(id: string) {
    return this.http.get(Globals.APP_API + 'message/' + id );
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

  editEmail(id: number, name: string, firstname: string, address: string,
            object: string, message: string ) {
    const data = {name, firstname, address, object, message};
    return this.http.put(Globals.APP_API + 'message/' + id , data);
  }

  patchEmail(id: number, data: any) {
    return this.http.patch(Globals.APP_API + 'message/' + id , data);
  }

  deleteEmail(id: number) {
    return this.http.delete(Globals.APP_API + 'message/' + id );
  }
}
