import { Component, OnInit } from '@angular/core';
import {Workingday} from '../../class/workingday';
import {Daypart} from '../../class/daypart';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {CalendarService} from '../../service/calendar.service';
import {AuthService} from '../../service/auth.service';
import {Router} from '@angular/router';
import {Consult} from '../../class/consult';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  private workingDay: Workingday;
  private workingDays: Workingday[];
  private selectedDaypart: Daypart;
  private consult: Consult;
  private calendarForm: FormGroup;

  private rdvconfirmed = false;

  consults: Consult[];

  constructor(private calendarServ: CalendarService,
              private authServ: AuthService,
              private fb: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.init();
    this.getConsults();
  }

  private init() {
    this.workingDay = null;
    this.selectedDaypart = null;
    this.calendarForm = this.fb.group({
      day: [null, Validators.required ],
      daypart: [null, Validators.required ],
      consult: [null, Validators.required],
    });
    this.calendarServ.getEvents()
        .subscribe((data) => {
          this.workingDays = data;
        });

  }


  getConsults() {
    this.calendarServ.getConsults()
        .subscribe((data: Consult[]) => {
          this.consults = data;
        });
  }

  createDaypartSelector(event) {
    const value = this.calendarForm.value;
    this.workingDay = value.day;

  }

  selectDaypart(event) {
    const val = this.calendarForm.value;
    this.selectedDaypart = val.daypart;
  }

  selectConsult(event) {
    const type = this.calendarForm.value;
    this.consult = type.consult;
  }

  rdv() {
    this.calendarServ.setRdv(this.selectedDaypart, this.authServ.currentUser, this.consult)
        .subscribe(
            () => {
            },
            () => {
            });
    this.rdvconfirmed = true;
    this.router.navigate(['/perso']);
  }

  undo() {
    this.ngOnInit();
  }
}
