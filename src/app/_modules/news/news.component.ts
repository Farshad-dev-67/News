import { Component } from '@angular/core';
import { INews } from 'src/app/_interfaces/news.interface';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  newsItem!: INews;
  getItem(event: INews) {
    this.newsItem = event;
  }
}
