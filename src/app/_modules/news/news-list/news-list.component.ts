import { AfterViewInit, Component, EventEmitter, OnInit, Optional, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { INews } from 'src/app/_interfaces/news.interface';
import { NewsService } from 'src/app/_sevices/news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit, AfterViewInit {
  @Output() newsItem = new EventEmitter<INews>;
  data!: INews[];
  count = 0;
  constructor(private newsService: NewsService,
    public dialog: MatDialog) {
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      const li: any = document.getElementsByClassName('someClass');
      let arr: any = [].slice.call(li);
      arr[0].focus();
    }, 1000);
    document.addEventListener('keydown', (e) => {
      switch (e.key) {
        case 'ArrowUp':
          if (this.dialog.openDialogs.length === 0) {
            this.count--;
            if (this.count < 0) {
              this.count = 0;
            }
            const li_up = document.getElementsByClassName('someClass');
            let arr_up: any = [].slice.call(li_up);
            if (this.count >= 0) {
              arr_up[this.count].focus();
            }
          }
          break;
        case 'ArrowDown':
          if (this.dialog.openDialogs.length === 0) {
            this.count++;
            if (this.count >= this.data.length) {
              this.count = this.data.length - 1;
              return;
            }
            const li_down = document.getElementsByClassName('someClass');
            let arr_down: any = [].slice.call(li_down);
            if (this.count < arr_down.length) {
              arr_down[this.count].focus();
            }
          }
          break;
      }
    })
  }
  ngOnInit(): void {
    this.newsService.subject.subscribe((res) => {
      this.data = res;
    })
  }
  emitItem(item: INews) {
    this.newsItem.emit(item);
  }
}
