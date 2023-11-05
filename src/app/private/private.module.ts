import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateRoutingModule } from './private-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AuthModule } from '../auth/auth.module';
import { AuthGuard } from '../services/guards/auth.guard';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
  ],
  imports: [
    IonicModule,
    CommonModule,
    AuthModule,
    PrivateRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard],
  exports: [
  ]
})
export class PrivateModule { }
