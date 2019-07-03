import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Workingday } from '../class/workingday';
import { Globals } from '../globals';
import { map } from 'rxjs/operators';
import {Daypart} from '../class/daypart';
import {User} from '../class/user';
import {Consult} from '../class/consult';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor(private http: HttpClient) { }

  getEvents() {
    return this.http.get<Workingday[]>(Globals.APP_API + 'calendar')
        .pipe(map((Workingdays: Workingday[]) => {
          Workingdays.forEach((workingday: Workingday) => {
            workingday.date =
                workingday.daydate + '-' +
                workingday.daymonth + '-' + workingday.dayyear;
            workingday.available = this.setAvailabaleAttribute(workingday.dayparts);
          });
          return Workingdays;
    }));
  }

  private setAvailabaleAttribute(dayparts: Daypart[]) {
    let available = 0;
    dayparts.forEach((daypart: Daypart) => {
      if (daypart.status.value === 0) {
        available += 1;
      }
    });
    return available > 0;
  }

  getConsults() {
    return this.http.get(Globals.APP_API + 'typeconsult');
  }

  setRdv(daypart: Daypart, user: User, consult: Consult) {
    return this.http.put( Globals.APP_API + 'calendar/addrdv', {
      daypart: daypart.id,
      user: user.id,
      consult: consult.id
    });
  }

  getRdv(userId: number) {
    return this.http.get(Globals.APP_API + 'daypart?user=' + userId);
  }
}
