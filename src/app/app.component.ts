import { Component, OnInit } from '@angular/core';
import { TitleService } from './service/title.service';
import { AuthService } from './service/auth.service';
import { User } from './class/user';
import {Category} from './class/category';
import {CategoryService} from './service/category.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  opened: boolean;
  user: User|null;
  categories: Category[];

  showMenu = false;


  constructor(private titleService: TitleService,
              private auth: AuthService,
              private catServ: CategoryService,
              private router: Router) {}

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  ngOnInit(): void {
    this.titleService.init();
    this.getCategories();
  }

  getCategories() {
    this.catServ.getCategories()
        .subscribe((data: Category[]) => {
            this.categories = data;
        });
  }

  isConnected(): boolean {
    this.user = this.auth.currentUser;
    return this.auth.isConnected();
  }

  logout(): void {
    return this.auth.logout();
  }


}
