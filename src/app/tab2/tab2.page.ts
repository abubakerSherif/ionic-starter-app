import { Component } from '@angular/core';
import { Platform, NavController, IonicSlides } from '@ionic/angular';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {


  public banners = [
    {
      title: 'banner 1',
      img : '../../assets/shapes.svg'
    },{
      title: 'banner 2',
      img : '../../assets/shapes.svg'
    }
  ];

  constructor(
    private platform: Platform,
    public navCtrl: NavController
  ) {
  }
  initializeApp() {
    this.platform.ready().then(() => {
    }).catch(() => {});
  }
  goToEditProgile() {
    this.navCtrl.navigateForward('edit-profile');
  }
  logout() {
    this.navCtrl.navigateRoot('/');
  }
}
