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
  showVignettes: boolean;
  displayedColumns: string[] = ['date', 'type', 'status'];

  loading: boolean;
  loading2: boolean;

  constructor(private router: Router,
              private emailService: EmailService,
              private auth: AuthService,
              private calendar: CalendarService) { }

  ngOnInit() {
    this.user = this.auth.currentUser;
    this.getMessages(this.user.id);
    this.getRdv(this.user.id);
    this.loading = true;
    this.loading2 = true;
    this.showVignettes = true;
  }

  toggleInfo() {
    this.showInfo = true;
    this.showRdv = false;
    this.showMessage = false;
    this.showVignettes = false;
  }
  closeInfo() {
    this.showVignettes = true;
    this.showInfo = false;
    this.showRdv = false;
    this.showMessage = false;
  }
  toggleRdv() {
    this.showRdv = true;
    this.getRdv(this.user.id);
    this.showInfo = false;
    this.showMessage = false;
    this.showVignettes = false;
  }

  toggleMessage() {
    this.showMessage = true;
    this.getMessages(this.user.id);
    this.showInfo = false;
    this.showRdv = false;
    this.showVignettes = false;
  }

  getMessages(userId: number) {
    this.emailService.getEmailsByUser(userId).subscribe((emails: Email[]) => {
      this.loading2 = false;
      this.emails = emails;
    });
  }

  getRdv(userId: number) {
    this.calendar.getRdv(userId).subscribe((dayparts: Daypart[]) => {
      this.loading = false;
      this.dayparts = dayparts;

    });
  }

  refreshRdv() {
    this.ngOnInit();
    this.showVignettes = false;
    this.showRdv = true;
  }

  refreshMessage() {
    this.ngOnInit();
    this.showVignettes = false;
    this.showMessage = true;
  }
}
