import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { AuthModule } from '../auth/auth.module';
import { OrderComponent } from '../private/order/order.component';
import { OrderListComponent } from '../private/order/order-list/order-list.component';
import { OrderCreateComponent } from '../private/order/order-create/order-create.component';
import { OrderShowComponent } from '../private/order/order-show/order-show.component';
import { OrderEditComponent } from '../private/order/order-edit/order-edit.component';

@NgModule({
    declarations: [
        Tab1Page, 
        OrderComponent, 
        OrderListComponent, 
        OrderCreateComponent,
        OrderShowComponent,
        OrderEditComponent
    ],
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        FormsModule,
        ReactiveFormsModule,
        ExploreContainerComponentModule,
        Tab1PageRoutingModule,
    ],
    exports: []
})
export class Tab1PageModule {}
