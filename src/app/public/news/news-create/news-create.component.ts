import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NewsService } from 'src/app/services/news.service';
import { Geolocation } from '@capacitor/geolocation';
import { IonModal, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-news-create',
  templateUrl: './news-create.component.html',
  styleUrls: ['./news-create.component.scss']
})
export class NewsCreateComponent implements OnInit {
  @ViewChild(IonModal) modal!: IonModal;
  dateExample = new Date().toISOString();
  barcodeData:any;
  coordinates : any;
  public form!: FormGroup;
  result:any;
  constructor(
    public formBuilder: FormBuilder,
    private newsService:NewsService,
    private router: Router,
    private loadingCtrl: LoadingController

  ) {
  }

  //import
  emitBarcode(eventData: { barcode: string }) {
    this.showLoading()

    this.barcodeData = eventData.barcode

    this.form.controls['barcode'].setValue(this.barcodeData)


  }
  //import

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      title:  [''],
      date:  [''],
      gps:  [''],
      barcode:  ['']
    })    
  }

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

  EditClicked(){
    this.router.navigate(['edit', 11]);    
      this.modal.dismiss(null, 'cancel');


  }
  async clicked(){
    this.form.controls['date'].setValue(this.dateExample)    
    try {      
      const response = await this.newsService.createNew({
        body:this.form.controls['barcode'].value,
        title:this.coordinates.coords.latitude + '/' + this.coordinates.coords.longitude,
        image_url:this.dateExample,
        status:this.form.controls['title'].value
      });      
      if (response.code === "0000") {
        console.log('Success');

      } else {
        console.log(response.error);
      }
    } catch (error) {
      
    }

  }

}
