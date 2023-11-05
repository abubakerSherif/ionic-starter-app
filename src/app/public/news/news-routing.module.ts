import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsEditComponent } from './news-edit/news-edit.component';
import { NewsShowComponent } from './news-show/news-show.component';

const routes: Routes = [
  {
    path: 'show/:id',
    component: NewsShowComponent,
  },
  {
    path: 'edit',
    component: NewsEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsRoutingModule {}
