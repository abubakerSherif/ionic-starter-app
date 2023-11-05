import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-order-show',
  templateUrl: './order-show.component.html',
  styleUrls: ['./order-show.component.scss']
})
export class OrderShowComponent implements OnInit {
  showData:any;

  constructor(
    public navCtrl: NavController,
    public router:Router,
  ) { }

  ngOnInit(): void {
    this.showData = this.router.getCurrentNavigation()?.extras.state;        
  }

}
