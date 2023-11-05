import { Component, ContentChild, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonInput } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class InputButtonComponent implements OnInit {

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
