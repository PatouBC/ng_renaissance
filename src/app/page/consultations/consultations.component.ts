import { Component, OnInit } from '@angular/core';
import {ConsultService} from '../../service/consult.service';
import {CategoryService} from '../../service/category.service';
import {Consult} from '../../class/consult';
import {Category} from '../../class/category';
import {CalendarService} from '../../service/calendar.service';
import {Workingday} from '../../class/workingday';
import {Dayparttype} from '../../class/dayparttype';
import {AuthService} from "../../service/auth.service";
import {User} from "../../class/user";

@Component({
  selector: 'app-consultations',
  templateUrl: './consultations.component.html',
  styleUrls: ['./consultations.component.scss']
})
export class ConsultationsComponent implements OnInit {

  consults: Consult[];
  user: User|null;
  categories: Category[];
  daytypes: Dayparttype[];

  constructor(private consultServ: ConsultService,
              private catServ: CategoryService,
              private calendarServ: CalendarService,
              private auth: AuthService) { }

  ngOnInit() {
    this.getConsults();
    this.getCategories();
    this.getDayPartType();
  }
    getConsults() {
    this.consultServ.getConsults()
        .subscribe((consults: Consult[]) => {
          this.consults = consults;
        });
    }

    getCategories() {
    this.catServ.getCategories()
        .subscribe((categories: Category[]) => {
          this.categories = categories;
        });
    }

    getDayPartType() {
     this.calendarServ.getDayparttypes()
         .subscribe((dayparttypes: Dayparttype[]) => {
             this.daytypes = dayparttypes;
         });
    }
    isConnected(): boolean {
        this.user = this.auth.currentUser;
        return this.auth.isConnected();
    }
}
