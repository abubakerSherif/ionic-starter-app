import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';
import { ReactiveFormsModule } from '@angular/forms'
import { IonicModule } from '@ionic/angular';
import { TabsPageModule } from '../tabs/tabs.module';
import { TabsPage } from '../tabs/tabs.page';


@NgModule({
  declarations: [LoginComponent, RegisterComponent, PageNotFoundComponent, AccessDeniedComponent],
  imports: [
    IonicModule,
    CommonModule,
    AuthRoutingModule,
    TabsPageModule,
    ReactiveFormsModule,
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
  ]
})
export class AuthModule { }
