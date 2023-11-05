import { Injectable, Inject, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Observer, Subject } from 'rxjs';
import { HttpClientModule, HttpClient, HttpRequest, HttpResponse, HttpEventType } from '@angular/common/http';
import { User } from '../models/user.model';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuth = new BehaviorSubject(false);
  sign_in_url = `${environment.api_url}/user/signin`;
  register_url = `/user/signup`;
  public user: User = new User();
  public userProfile: User = new User();
  public lang_id = localStorage.getItem('lang_code');

  public headers = {
    'Content-Type': 'application/json',
    'client-key': 'Mob!le@pp',
    'Authorization': `${this.user.token}`
  };

  private onSubject = new Subject<{ key: string; value: any }>();

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  async signup(user: User): Promise<User> {
    try {
      const url = `/auth/signup`;
      const response: any = await this.http
        .post<User>(url, user, { headers: this.headers })
        .toPromise();

      if (response.code !== '0000') {
        throw response;
      }

      this.setUser(response.data);
      return Promise.resolve(this.user);
    } catch (error) {
      throw error;
    }
  }
  async login(email_phone: string, password: string): Promise<User> {
    try {          
      const response: any = await this.http
        .post(
          this.sign_in_url,
          { email_phone, password },
          { headers: this.headers }
        )
        .toPromise();        
      if (response.code !== '0000') {
        throw response;
      }
      this.setUser(response.data);
      this.store('user', this.user);
      return Promise.resolve(this.user);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  isAuthenticated(){
    return this.isAuth.value;
  }

  getUserInfo(){
    return this.user
  }

  async setUser(user: User) {
    this.user = user;
    this.headers['Authorization'] = this.user.token;
    this.isAuth.next(true);    
  }

  async logout() {
    this.clear('user');
    this.isAuth.next(false);
    this.router.navigate(['tabs/tab2']);
  }

  async loginWithToken(token: string): Promise<User> {
    try {
        this.headers["Authorization"]= token;
        const response: any = await this.http
            .get(`/auth/getByToken`, {
                headers: this.headers
            })
            .toPromise();

        this.setUser(response.data);
        if (response.code !== '0000') {
            throw response;
        }

        this.setUser(response.data);
        this.store('user', this.user);

        return Promise.resolve(this.user);
    } catch (error) {
        return Promise.reject(error);
    }
}

  authorise(accessCodes: string[]): boolean {
    try {
      if (!this.user.access_codes) {
        return false;
      }

      if (this.user.access_codes === undefined) {
        return false;
      }
      const acc_code = this.user.access_codes.split(',');
      if (acc_code === undefined) {
        return false;
      }
      if (!acc_code) {
        return false;
      }

      return acc_code.some((access_code) => {
        for (const code of accessCodes) {
          if (code === access_code) {
            return true;
          }
        }
        return false;
      });
    } catch (error) {
      throw error;
    }
  }

  authoriseUserType(accessCodes: string): boolean {
    try {
      if (!this.user.access_codes) {
        return false;
      }

      if (this.user.access_codes === undefined) {
        return false;
      }
      const acc_code = this.user.access_codes.split(',');
      if (acc_code === undefined) {
        return false;
      }
      if (!acc_code) {
        return false;
      }

      return acc_code.some((access_code) => {
        for (const code of accessCodes) {
          if (code === access_code) {
            return true;
          }
        }
        return false;
      });
    } catch (error) {
      throw error;
    }
  }


  public store(key: string, data: any): void {
    const expiry = new Date();
    expiry.setHours(expiry.getHours() + 12);

    data.expiry_time = expiry;
    localStorage.setItem(key, JSON.stringify(data));
    // the local application doesn't seem to catch changes to localStorage...
    this.onSubject.next({ key: key, value: data });
  }

  public clear(key: string) {
    localStorage.removeItem(key);
    // the local application doesn't seem to catch changes to localStorage...
    this.onSubject.next({ key: key, value: null });
  }
}
