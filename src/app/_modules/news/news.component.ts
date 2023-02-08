import { Component, OnInit } from '@angular/core';
import { count } from 'rxjs';
import { INews } from 'src/app/_interfaces/news.interface';
import { NewsService } from 'src/app/_sevices/news.service';
import { ServicesService } from 'src/app/_sevices/services.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  newsItem!: INews | any;
  search: INews[] = [];
  constructor(private newsService: NewsService,
    private services: ServicesService) {

  }
  ngOnInit(): void {
    this.inpSearch();
  }
  getItem(event: INews) {
    this.newsItem = event;
  }
  inpSearch(event?: any) {
    delete this.newsItem;
    setTimeout(() => {
      this.search = [];
      this.newsService.getNews().subscribe((res) => {
        if (!event || event.target.value === '') {
          this.newsService.subject.next(res);
        } else {
          res.forEach((item) => {
            const fd = this.chk(item.services, event.target.value)
            if (item.title.includes(event.target.value) && this.chk(item.services, event.target.value).length > 0) {
              this.search.push(item);
            }
            this.newsService.subject.next(this.search);
          })
        }
      })
    }, 1000);
  }
  chk(services: Array<number>, value: string): any {
    let serviceFilter: any[] = [];
    this.services.getServices().subscribe((res) => {
      serviceFilter = res.filter((o1) => {
        return services.some(function (o2) {
          return o1.id === o2;
        });
      })
    });
    if (serviceFilter.length > 0) {
      const val = serviceFilter.filter((res) => {
        return res.title.includes(value);
      })
      return val;
    }

  }
}
