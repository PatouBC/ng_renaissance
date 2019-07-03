import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {AuthService} from '../../service/auth.service';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
     registerFailed: boolean;
     registrationDone: boolean;
     loading: boolean;
     registerForm: FormGroup;

    constructor(private fb: FormBuilder, private authServ: AuthService, private cookieServ: CookieService) { }

    ngOnInit() {
        this.registerForm = this.fb.group({
            name: [ null, Validators.required ],
            firstname: [ null, Validators.required ],
            username: [ null, Validators.required ],
            password: new FormControl('', Validators.compose([
                Validators.required,
                Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$')
            ])),
            email: new FormControl('', Validators.compose([
                Validators.required,
                Validators.pattern('^(([^<>()\\[\\]\\.,;:\\s@\\"]+(\\.[^<>()\\[\\]\\.,;:\\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\\]\\.,;:\\s@\\"]+\\.)+[^<>()[\\]\\.,;:\\s@\\"]{2,})$')
            ])),
            rgpd: [ null, Validators.required ]
        });
    }

    get password() {
        return this.registerForm.get('password');
    }

    register() {
        const val = this.registerForm.value;
        this.setCookie();
        this.loading = true;
        this.authServ.register(val).subscribe( () => {
            this.loading = false;
            this.registrationDone = true;
        }, () => {
            this.registerFailed = true;
        });
    }

    setCookie() {
        this.cookieServ.check('rgpd');
        if (!'rgpd') {
            this.cookieServ.set('rgpd', 'true');
        }
    }
}
