import { Component, OnInit,  Inject, ViewChild, ViewContainerRef, ComponentFactoryResolver} from '@angular/core';
import { IonInput, NavController, Platform } from '@ionic/angular';
import { NewsService } from '../../../services/news.service'
import { Router } from '@angular/router';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { merge, fromEvent, of as observableOf, pipe } from "rxjs";
import { startWith, switchMap, map, catchError, debounceTime } from "rxjs/operators";

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
})


export class NewsListComponent implements OnInit {
  @ViewChild(IonModal) modal!: IonModal;
  newsBody : any;
  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  inputModel = '';
  public searchText: string = '';
  public searchText1: string = '';

  public options = {};


  constructor(
    private platform: Platform,
    private newsService:NewsService,
    public navCtrl: NavController,
    public router:Router,

  ) {
  }
  async ngOnInit() {
    this.getData();
  }

  async getData(){
    const response = await  this.newsService.listNews({
      filter: '',
      sort: '',
      order: '',
      pageSize: '5',
      pageIndex: '', 
    });
    this.newsBody = response.data

  }

  getNews() {
    merge(
      )
      .pipe(
        startWith({}),
        debounceTime(1000),
        switchMap(() => {            
          this.options = {
            filter: this.searchText,
            sort: '',
            order: this.searchText1,
            pageSize: '',
            pageIndex: '', 
          };      
          return this.newsService!.listNews(this.options);
        }),
        map((data:any) => {          
          this.newsBody = data.data
          return data.data;
        }),
        catchError((error:any) => {
          console.error(error);
          return observableOf([]);
        })
      )
      .subscribe((data:any) => {
        this.newsBody = data
      });
  }


  show(showData:any) {
    this.router.navigateByUrl(`public/news/show/`+`${showData._id}` , {state:{data:showData}} );
  }

  edit(editData:any) {
    this.router.navigateByUrl(`public/news/edit` , {state:{data:editData}} );
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss('Confirm', 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }

}
