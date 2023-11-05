import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NewsService } from 'src/app/services/news.service';
import { Geolocation } from '@capacitor/geolocation';
import { IonModal, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-edit',
  templateUrl: './news-edit.component.html',
  styleUrls: ['./news-edit.component.scss']
})
export class NewsEditComponent implements OnInit {

  dateExample = new Date().toISOString();
  barcodeData:any;
  coordinates : any;
  public form!: FormGroup;
  result:any;

  editData:any;
  constructor(

    public formBuilder: FormBuilder,
    private newsService:NewsService,
    private router: Router,
    private loadingCtrl: LoadingController

  ) { }

  async ngOnInit() {    
    this.form = this.formBuilder.group({
      date:  [''],
      gps:  [''],
      barcode:  [''],
    })  

    const data  = {
      barcode : "asd",
      date :"2029-10-30T00:52:58.890Z",
      gps :"-33.9790657/150.8587144"
    }

    this.form.setValue(data);
    this.dateExample = data.date;

    this.editData = this.router.getCurrentNavigation()?.extras.state;    

  }


   //import
   emitBarcode(eventData: { barcode: string }) {
    this.showLoading()

    this.barcodeData = eventData.barcode

    this.form.controls['barcode'].setValue(this.barcodeData)


  }
  //import


  currentPosition = async () => {
    this.showLoading()

    this.coordinates = await Geolocation.getCurrentPosition();
    this.form.controls['gps'].setValue(this.coordinates.coords.latitude + '/' + this.coordinates.coords.longitude)

  };

  ionViewWillLeave() {
    this.form.reset();
    this.result = undefined;
  }


  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
      duration: 3000,
    });

    loading.present();
  }


  clicked(){
    this.showLoading()
    this.form.controls['date'].setValue(this.dateExample)    
    try {
      // const response = this.newsService.createNew(this.form.value);
      // if (response.code === "0000") {
        
      // } else {
      //   console.log(response.error);
      // }
    } catch (error) {
      
    }

  }

}
