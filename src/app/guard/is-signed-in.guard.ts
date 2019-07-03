import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import {AuthService} from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class IsSignedInGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      const isSignedIn = this.auth.isConnected();
      if (isSignedIn !== true) {
        this.router.navigate(['/perso']);
      }
      return isSignedIn;
  }
}
