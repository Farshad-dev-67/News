import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { INews } from '../_interfaces/news.interface';
import { newsData } from '../_mockData/news-mockData';

@Injectable()
export class NewsService {
  subject = new Subject<INews[]>();
  constructor() { }
  getNews(): Observable<INews[]> {
    return of(newsData)
  }
}
