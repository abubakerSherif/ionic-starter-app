import { EventEmitter, Injectable } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class NavService {
    public right_nav_opened = new BehaviorSubject<boolean>(false);
    public sidenav: any;
    public right_nav_toggle: any;
    public is_opened = false;
    public currentUrl = new BehaviorSubject<string>(undefined);

    constructor(private router: Router) {
        this.router.events.subscribe((event: Event) => {
            if (event instanceof NavigationEnd) {
                this.currentUrl.next(event.urlAfterRedirects);
            }
        });
    }

    public closeNavs() {
        if (this.sidenav) {
            this.is_opened = false;
            this.sidenav.close();
        }
        if (this.right_nav_toggle) {
            this.right_nav_toggle.close();
        }
    }

    public openNav() {
        if (this.sidenav) {
            this.is_opened = true;
            this.sidenav.open();
        }
    }

    /**
     * ToggleRightNav
     */
    public toggleRightNav() {
        this.right_nav_toggle.toggle();
    }
}
