import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { IonicModule } from '@ionic/angular';
import { NewsModule } from './news/news.module';
import { NewsCreateComponent } from './news/news-create/news-create.component';

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
  ]
})
export class PublicModule { }
