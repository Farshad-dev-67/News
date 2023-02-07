import { Component, OnInit } from '@angular/core';
import { INewsInterface } from 'src/app/_interfaces/news.interface';
import { NewsService } from 'src/app/_sevices/news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  data!: INewsInterface[];
  constructor(private newsList: NewsService){}
  ngOnInit(): void {
    this.newsList.getNews().subscribe((res) => {
      this.data = res;
    })
  }
}
