import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable(
  // { providedIn: 'root'}
)
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean  {
      return this.checkLogin(state);
  }

  checkLogin(state: RouterStateSnapshot) {
    
    let is_auth = false;
    this.authService.isAuth
        .subscribe(result => {
            is_auth = result;
        })
        .unsubscribe();

    const currentQueryParams = this.router.parseUrl(state.url).queryParams;
    const urlTree = this.router.parseUrl(state.url);
    let urlWithoutParams = '';
    if (urlTree.root.children['primary']) {
        urlWithoutParams = urlTree.root.children['primary'].segments
            .map(it => it.path)
            .join('/');
    }

    if (!is_auth) {
        this.router.navigate(['auth/login'], {
            queryParams: {
                redirect: urlWithoutParams,
                ...currentQueryParams
            }
        });

        return false;
    }

    return true;
}

}
