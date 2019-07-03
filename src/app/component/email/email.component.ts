import { Component, OnInit } from '@angular/core';
import {EmailService} from '../../service/email.service';
import {Email} from '../../class/email';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../service/auth.service';
import {User} from '../../class/user';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {

  emailSent: boolean;
  emailFailed: boolean;
  email: Email;
  user: User;
  emailForm: FormGroup;
  rgpd: boolean;
  constructor(private emailService: EmailService,
              private fb: FormBuilder,
              private auth: AuthService) { }

  ngOnInit() {
    this.user = this.auth.currentUser;
    if (this.user) {
      this.rgpd = true;
      this.userEmailForm();
    } else {
      this.notUserEmailForm();
    }
  }
  userEmailForm() {

    this.emailForm = this.fb.group({
      username : new FormControl(this.user.username),
      email : new FormControl(this.user.email),
      name : new FormControl(this.user.name),
      firstname : new FormControl(this.user.firstname),
      address : new FormControl(this.user.email),
      object: [ null, Validators.required ],
      message: [ null, Validators.required ]
    });

  }
  notUserEmailForm() {
    this.emailForm = this.fb.group({
      name: [ null, Validators.required ],
      firstname: [ null, Validators.required ],
      address: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^(([^<>()\\[\\]\\.,;:\\s@\\"]+(\\.[^<>()\\[\\]\\.,;:\\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\\]\\.,;:\\s@\\"]+\\.)+[^<>()[\\]\\.,;:\\s@\\"]{2,})$')
      ])),
      object: [ null, Validators.required ],
      message: [ null, Validators.required ],
      rgpd: [ null, Validators.required ]
    });
  }
  createEmail() {
    const val = this.emailForm.value;
    this.emailService.createEmail(val).subscribe(() => {
      this.emailSent = true;
    }, () => {
      this.emailFailed = true;
    });

  }
}
