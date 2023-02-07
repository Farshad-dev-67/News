import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {INews} from "../../../_interfaces/news.interface";
import {ServicesService} from "../../../_sevices/services.service";
import {MatDialog} from "@angular/material/dialog";
import {SubjectDialogComponent} from "../subject-dialog/subject-dialog.component";
import {IServices} from "../../../_interfaces/services.interface";

@Component({
    selector: 'app-news-subject',
    templateUrl: './news-subject.component.html',
    styleUrls: ['./news-subject.component.scss']
})
export class NewsSubjectComponent implements OnChanges {
    @Input() itemServices!: INews;
    servicesFilter: any [] = [];
    getItemService!: IServices;

    constructor(private servicesService: ServicesService,
                public dialog: MatDialog) {
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.servicesService.getServices().subscribe((res) => {
            this.servicesFilter = res.filter((o1) => {
                return this.itemServices.services.some(function (o2) {
                    return o1.id === o2;
                });
            })
        })
        if (this.servicesFilter.length > 1) {
          const dialog = this.dialog.open(SubjectDialogComponent, {
                data: this.servicesFilter,
            });
            dialog.afterClosed().subscribe(result => {
                if (result) {
                    this.getItemService = result;
                }
            });
        }
    }
}
