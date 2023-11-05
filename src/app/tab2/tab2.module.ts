import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { Tab2PageRoutingModule } from './tab2-routing.module';
import { NewsModule } from "../public/news/news.module";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SlidesComponent } from '../public/slides/slides.component';

@NgModule({
    declarations: [Tab2Page,SlidesComponent],
    imports: [
        IonicModule,
        CommonModule,
        NewsModule,
        FormsModule,
        ExploreContainerComponentModule,
        Tab2PageRoutingModule,

    ],
    // exports:[SlideComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class Tab2PageModule {}
