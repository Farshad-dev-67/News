import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {INews} from 'src/app/_interfaces/news.interface';

@Component({
    selector: 'app-news-specifications',
    templateUrl: './news-specifications.component.html',
    styleUrls: ['./news-specifications.component.scss']
})
export class NewsSpecificationsComponent implements OnChanges {
    @Input() itemSpecification!: INews;
    item!: INews;

    constructor() {

    }

    ngOnChanges(changes: SimpleChanges) {
        this.item = this.itemSpecification;
    }

    convertData(date: any) {
        return new Date(date).toLocaleDateString('fa-IR')
    }
}
