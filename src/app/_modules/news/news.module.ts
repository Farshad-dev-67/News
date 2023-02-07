import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsSpecificationsComponent } from './news-specifications/news-specifications.component';
import { NewsSubjectComponent } from './news-subject/news-subject.component';
import { ReportersListComponent } from './reporters-list/reporters-list.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    NewsComponent,
    NewsListComponent,
    NewsSpecificationsComponent,
    NewsSubjectComponent,
    ReportersListComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    MaterialModule
  ]
})
export class NewsModule { }
