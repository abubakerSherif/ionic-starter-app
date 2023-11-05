import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsRoutingModule } from './news-routing.module';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsEditComponent } from './news-edit/news-edit.component';
import { NewsCreateComponent } from './news-create/news-create.component';
import { NewsShowComponent } from './news-show/news-show.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { IonicModule } from '@ionic/angular';
import { BarcodeScannerComponent } from '../barcode-scanner/barcode-scanner.component';
import { BarcodeScanningModalComponent } from '../barcode-scanner/barcode-scanning-modal.component';
import { InputButtonComponent } from '../input-button/input-button.component';

@NgModule({
  declarations: [
    NewsListComponent,
    NewsEditComponent,
    NewsCreateComponent,
    NewsShowComponent,
    BarcodeScannerComponent,
    InputButtonComponent,
    BarcodeScanningModalComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    NewsRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [
    NewsListComponent,
    NewsEditComponent,
    NewsCreateComponent,
    NewsShowComponent,
    BarcodeScannerComponent,
    InputButtonComponent,
    BarcodeScanningModalComponent
  ]
})
export class NewsModule { }
