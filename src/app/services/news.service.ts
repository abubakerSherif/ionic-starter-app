import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Response } from '../models/response.model'

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  news_url = `${environment.api_url}/news`;

  constructor(private baseService: BaseService) {}

  createNew(New: any): Promise<any> {
    try {
      return this.baseService
        .POST(`${this.news_url}`, New)
        .toPromise();
    } catch (error) {
      return observableThrowError(error).toPromise();
    }
  }

  listNews(options: any): Promise<any> {
    try {
      return this.baseService
        .GET(
          `${this.news_url}?filter=` +
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

  getNews(searchText:any): Observable<any> {
    try {
        const result = this.baseService.GET(
            `${this.news_url}?filter=${searchText}`
        );
        return result;

    } catch (error) {
        return observableThrowError(error);
    }
}


  getNew(id: any): Promise<any> {
    try {
      return this.baseService.GET(`${this.news_url}/${id}`).toPromise();
    } catch (error) {
      return observableThrowError(error).toPromise();
    }
  }

  updateNew(New: any, id:any): Observable<any> {
    try {
        return this.baseService.UPDATE(
            `${this.news_url}/${id}`,
            New
        );
    } catch (error) {
      console.log(error);
        return observableThrowError(error);
    }
}

}
