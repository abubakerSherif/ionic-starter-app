import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {


  accountPages = [
    {
       title: 'Log In',
       url: '/auth/login',
       ionicIcon: 'log-in-outline'
    },
    {
       title: 'Sign Up',
       url: '/auth/signup',
       ionicIcon: 'person-add-outline'
    },
  ]

  constructor(
    public authService:AuthService,
    private router: Router,

  ) {}
  ngOnInit(){
}

ionViewWillEnter(){
  this.ngOnInit()    
}

sideItemClicked(GG:any){
  this.router.navigate([GG]);    
}
}
