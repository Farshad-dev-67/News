import { Component } from '@angular/core';
import { INewsInterface } from 'src/app/_interfaces/news.interface';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  newsItem!: INewsInterface;
  getItem(event: INewsInterface) {
    this.newsItem = event;
  }
}
