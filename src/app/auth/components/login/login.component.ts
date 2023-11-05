import { Component, OnInit,  Inject} from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import {ActivatedRoute, Router, NavigationStart, NavigationEnd, Event } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  email_phone!: string;
  password!: string;
  error!: string;
  constructor(
    private formBuilder: FormBuilder,
    private alertController: AlertController,
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) 
  {
  }

  ngOnInit(): void {
    this.createForm();
    this.checkAuthToken();
    this.checkLoggedIn();
  }

  createForm() {
    this.form = this.formBuilder.group({
      email_phone: [
        '',
        Validators.compose([
          Validators.required,
        ]),
      ],
      password: [
        '',
        Validators.compose([Validators.minLength(6), Validators.required]),
      ],
    });
  }
  get f() {
    return this.form.controls;
  }

  login() {
    this.authService
      .login(this.form.value.email_phone, this.form.value.password)
      .then((res) => {        
        this.redirect();
      })
      .catch((error) => {
        console.log(error);
        this.presentAlert(error)
      });
  }


  async presentAlert(error:any) {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Important message',
      message: error.error?.message,
      buttons: ['OK'],
    });

    await alert.present();
  }


  redirect() {
    const params = this.activatedRoute.snapshot.queryParams;    
    if (params['redirect']) {
      this.router.navigate([params['redirect']]);
    } else {
      this.router.navigate(['tabs/tab3']);
    }
  }

  checkAuthToken() {
    const token = this.activatedRoute.snapshot.queryParams['cookie'];
    
    if (!token) {
        return;
    }
    this.authService
        .loginWithToken(token)
        .then(user => {
            this.redirect();
        })
        .catch(error => {
            this.error = error.message;
        });
  }

  checkLoggedIn(){
    const user = JSON.parse(localStorage.getItem('user') || '{}');        
    if(user && user.expiry_time) {
      if (new Date(user.expiry_time) > new Date()) {
        this.authService.setUser(user);
        this.redirect();
      } else {
        // this.authService.logout();
      }
    } else {
      // this.authService.logout();
    }
  }
}
