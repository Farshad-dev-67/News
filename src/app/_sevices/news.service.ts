import { ObserversModule } from '@angular/cdk/observers';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { INewsInterface } from '../_interfaces/news.interface';
import { newsData } from '../_mockData/news-mockData';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
 
  constructor() { }
  getNews(): Observable<INewsInterface[]> {
    return of(newsData)
  }
}
