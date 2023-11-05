import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { IonicModule } from '@ionic/angular';
import { NewsModule } from './news/news.module';

@NgModule({
  declarations: [

  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    NewsModule,
    PublicRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class PublicModule { }
