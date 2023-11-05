import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  port_url = `${environment.api_url}/orders`;

  constructor(private baseService: BaseService) {}

  createOrder(Order: any): Promise<any> {
    try {
      return this.baseService
        .POST(`${this.port_url}`, Order)
        .toPromise();
    } catch (error) {
      return observableThrowError(error).toPromise();
    }
  }

  listOrders(options: any): Promise<any> {
    try {
      return this.baseService
        .GET(
          `${this.port_url}?filter=` +
            options.filter +
            '&sort=' +
            options.sort +
            '&order=' +
            options.order +
            '&pageSize=' +
            options.pageSize +
            '&pageIndex=' +
            options.pageIndex
        )
        .toPromise();
    } catch (error) {
      return observableThrowError(error).toPromise();
    }
  }

  getOrders(searchText:any): Observable<any> {
    try {
        const result = this.baseService.GET(
            `${this.port_url}?filter=${searchText}`
        );
        return result;

    } catch (error) {
        return observableThrowError(error);
    }
}


  getOrder(id: any): Promise<any> {
    try {
      return this.baseService.GET(`${this.port_url}/${id}`).toPromise();
    } catch (error) {
      return observableThrowError(error).toPromise();
    }
  }

  updateOrder(Order: any, id:any): Observable<any> {
    try {
        return this.baseService.UPDATE(
            `${this.port_url}/${id}`,
            Order
        );
    } catch (error) {
      console.log(error);
        return observableThrowError(error);
    }
}

}
