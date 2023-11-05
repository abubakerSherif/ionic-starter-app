import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  connected! : any;
  loggedIn = false;
  constructor(
    public authService:AuthService,
    private router: Router,
  ) {}

  ngOnInit(){    
      if (this.authService.isAuthenticated()) {
        // this.router.navigate(['private/profile']);
      } else {
        this.router.navigate(['auth/login']);

      }
  }
  ionViewWillEnter(){
    this.ngOnInit()    
  }
  logout(){
    // this.authService.logout()
  }



sideItemClicked(GG:any){
  this.router.navigate([GG]);    
}
}
