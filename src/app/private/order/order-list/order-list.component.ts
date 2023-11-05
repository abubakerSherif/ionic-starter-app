import { Component, OnInit,  Inject, ViewChild, ViewContainerRef, ComponentFactoryResolver} from '@angular/core';
import { IonInput, NavController, Platform } from '@ionic/angular';
import { OrderService } from '../../../services/order.service'
import { Router } from '@angular/router';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { merge, fromEvent, of as observableOf, pipe } from "rxjs";
import { startWith, switchMap, map, catchError, debounceTime } from "rxjs/operators";

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent implements OnInit {
  @ViewChild(IonModal) modal!: IonModal;
  ordersBody : any;
  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  inputModel = '';
  public searchText: string = '';
  public searchText1: string = '';

  public options = {};


  constructor(
    private platform: Platform,
    private orderService:OrderService,
    public navCtrl: NavController,
    public router:Router,

  ) {
  }
  async ngOnInit() {    
    this.getData();
  }

  async getData(){
    const response = await  this.orderService.listOrders({
      filter: '',
      sort: '',
      order: '',
      pageSize: '5',
      pageIndex: '', 
    });

    this.ordersBody = response.data

  }

  getOrders() {
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
          return this.orderService!.listOrders(this.options);
        }),
        map((data:any) => {          
          this.ordersBody = data.data          
          return data.data;
        }),
        catchError((error:any) => {
          console.error(error);
          return observableOf([]);
        })
      )
      .subscribe((data:any) => {
        this.ordersBody = data
      });
  }


  show(showData:any) {
    this.router.navigateByUrl(`tabs/tab1/show/`+`${showData._id}` , {state:{data:showData}} );
  }

  edit(editData:any) {
    this.router.navigateByUrl(`tabs/tab1/edit` , {state:{data:editData}} );
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
