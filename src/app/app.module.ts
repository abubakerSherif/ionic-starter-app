import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { PublicModule } from './public/public.module';
import { PrivateModule } from './private/private.module';
import { NewsCreateComponent } from './public/news/news-create/news-create.component';
import { LoginComponent } from './auth/components/login/login.component';
import { AuthGuard } from './services/guards/auth.guard';
import { RoutingGuard } from './services/guards/routing.guard';
import { TabsPageModule } from './tabs/tabs.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    PublicModule,
    TabsPageModule,
    PrivateModule,
    IonicModule.forRoot(), 

  ],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],

  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },AuthGuard, RoutingGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
