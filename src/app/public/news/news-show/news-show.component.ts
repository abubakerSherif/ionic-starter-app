import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-show',
  templateUrl: './news-show.component.html',
  styleUrls: ['./news-show.component.scss']
})
export class NewsShowComponent implements OnInit {
  showData:any;
  constructor(
    public navCtrl: NavController,
    public router:Router,
  ) { }


  async ngOnInit() {
    this.showData = this.router.getCurrentNavigation()?.extras.state;    
  }


}
