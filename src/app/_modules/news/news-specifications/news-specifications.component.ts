import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { INewsInterface } from 'src/app/_interfaces/news.interface';

@Component({
  selector: 'app-news-specifications',
  templateUrl: './news-specifications.component.html',
  styleUrls: ['./news-specifications.component.scss']
})
export class NewsSpecificationsComponent implements  OnChanges {
  @Input() itemSpecificaton!: INewsInterface;
  item!: INewsInterface;
  constructor(){

  }
  ngOnChanges(changes: SimpleChanges){
   this.item = this.itemSpecificaton;
  }
}
