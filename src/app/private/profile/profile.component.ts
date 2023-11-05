import { Component, ContentChild, Input, OnInit } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
@ContentChild(IonInput) input!: IonInput;
@Input() public item:any;
data:any;
constructor(
  private authService:AuthService
) {
}
ngOnInit(){  
  this.data = JSON.parse(localStorage['user']);  
}

logout(){
  this.authService.logout()
}
}
