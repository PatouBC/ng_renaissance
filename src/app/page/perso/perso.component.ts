import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {EmailService} from '../../service/email.service';
import {Email} from '../../class/email';
import {AuthService} from '../../service/auth.service';
import {User} from '../../class/user';
import {CalendarService} from '../../service/calendar.service';
import {Daypart} from '../../class/daypart';

@Component({
  selector: 'app-perso',
  templateUrl: './perso.component.html',
  styleUrls: ['./perso.component.scss']
})
export class PersoComponent implements OnInit {
  emails: Email[];
  dayparts: Daypart[];
  daypart: Daypart;
  private user: User;
  showInfo: boolean;
  showRdv: boolean;
  showMessage: boolean;
  constructor(private router: Router,
              private emailService: EmailService,
              private auth: AuthService,
              private calendar: CalendarService) { }

  ngOnInit() {
    this.user = this.auth.currentUser;
    this.getMessages(this.user.id);
    this.getRdv(this.user.id);
  }

  toggleInfo() {
    this.showInfo = !this.showInfo;
    this.showRdv = false;
    this.showMessage = false;
  }
  toggleRdv() {
    this.showRdv = !this.showRdv;
    this.showInfo = false;
    this.showMessage = false;
  }
  toggleMessage() {
    this.showMessage = !this.showMessage;
    this.showRdv = false;
    this.showInfo = false;
  }

  getMessages(userId: number) {
    this.emailService.getEmailsByUser(userId).subscribe((emails: Email[]) => {
      this.emails = emails;
    });
  }

  getRdv(userId: number) {
    this.calendar.getRdv(userId).subscribe((dayparts: Daypart[]) => {
      this.dayparts = dayparts;

    });
  }

}
