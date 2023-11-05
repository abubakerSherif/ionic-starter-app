import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { NewsModule } from "../public/news/news.module";
import { NewsCreateComponent } from '../public/news/news-create/news-create.component';

@NgModule({
    declarations: [Tab2Page],
    imports: [
        IonicModule,
        CommonModule,
        NewsModule,
        FormsModule,
        ExploreContainerComponentModule,
        Tab2PageRoutingModule,
        
    ]
})
export class Tab2PageModule {}
