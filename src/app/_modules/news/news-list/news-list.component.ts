import { outputAst } from '@angular/compiler';
import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';
import { INewsInterface } from 'src/app/_interfaces/news.interface';
import { NewsService } from 'src/app/_sevices/news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit, AfterViewInit {
  @Output() newsItem = new EventEmitter<INewsInterface>;
  data!: INewsInterface[];
  constructor(private newsList: NewsService) { }
  ngAfterViewInit(): void {
    const ul = document.getElementsByClassName('someClass');
    var a: any = ul[0];
    a.focus();
    document.addEventListener('keydown', (e) => {
      switch (e.key) {
        case 'ArrowUp':
          break;
        case 'ArrowDown':
          break;
      }
    })
  }
  ngOnInit(): void {

    this.newsList.getNews().subscribe((res) => {
      this.data = res;
    })
  }
  
  emitItem(item: INewsInterface){
    this.newsItem.emit(item);
  }
}
