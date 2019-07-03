import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public connexionFailed: boolean;
  public loading: boolean;
  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
    if (this.auth.isConnected()) {
      this.router.navigate(['/home']);
    }
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  login() {
    this.loading = true;
    this.connexionFailed = false;
    const val = this.loginForm.value;
    if (val.username && val.password) {
      this.auth.login(val.username, val.password)
          .subscribe(() => {
            this.loading = false;
            this.auth.profile()
            .subscribe(
                (user) => {
                  this.router.navigate(['/perso']);
                },
                (err) => {
                  console.error(err);
                  this.connexionFailed = true;
                });
            },
              (err) => {
                console.error(err);
                this.connexionFailed = true;
                this.router.navigate(['/registration']);
              });
    }
  }

}
