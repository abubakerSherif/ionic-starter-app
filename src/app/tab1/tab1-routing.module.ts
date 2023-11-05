import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import { OrderCreateComponent } from '../private/order/order-create/order-create.component';
import { OrderListComponent } from '../private/order/order-list/order-list.component';
import { OrderShowComponent } from '../private/order/order-show/order-show.component';
import { OrderEditComponent } from '../private/order/order-edit/order-edit.component';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'create',
    component: OrderCreateComponent,
  },
  {
    path: 'list',
    component: OrderListComponent,
  },
  {
    path: 'show/:id',
    component: OrderShowComponent,
  },
  {
    path: 'edit/:id',
    component: OrderEditComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
