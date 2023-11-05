import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root',
})
export class RoutingGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkAccessCode(next, state);
  }

  async checkAccessCode(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    let canAccess: boolean;
    try {
      const user = JSON.parse(localStorage.getItem('user') || '');
      if(user){
        console.log(user);
        if (user.user_type == 4) {
          return true;
        } else {
          this.router.navigate(['/auth/accessDenied']);
          return false;
        }
      }
      return false;
    } catch (error) {
      this.router.navigate(['/auth/login']);
      return false;
    }
  }
}
