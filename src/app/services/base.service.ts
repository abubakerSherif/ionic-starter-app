import { Injectable } from '@angular/core';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(public http: HttpClient, public authService: AuthService) { }


    /**
     * GET function responsible for communiating
     * with @api to RETRIEVE data requsted by a
     * particular component of the system.
     */
    GET(url: any, options?: any): Observable<any> {
      options = options || { headers: this.authService.headers };
      return this.http.get<any>(url, options);
  }

  /**
   * POST function responsible for communiating
   * with @api to INSERT data send by a
   * particular component of the system.
   */
  POST(url: any, body: any): Observable<any> {
      return this.http.post(url, body, {
          headers: this.authService.headers
      });
  }

  POSTFILE(url: any, body: any): Observable<any> {
    return this.http.post(url, body);
}

  /**
   * UPDATE function responsible for communiating
   * with @api to UPDATE data send by a
   * particular component of the system.
   */
  UPDATE(url: any, body: any): Observable<any> {
      return this.http.patch<any>(url, body, {
          headers: this.authService.headers
      });
  }

  /**
   * DELETE function responsible for communiating
   * with @api to DELETE data specefied by a
   * particular component of the system.
   */
  DELETE(url: any): Observable<any> {
      return this.http.delete<any>(url, {
          headers: this.authService.headers
      });
  }

  /**
   * GET function responsible for communiating
   * with external @api which is not develped by
   * OrderStation to GET data requsted by a
   * particular component of the system.
   */
  GET_FROM_EXTERNAL_API(url: any): Observable<any> {
      return this.http.get<any>(url);
  }
}
