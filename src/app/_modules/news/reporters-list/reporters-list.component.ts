import {Component, Input, OnInit} from '@angular/core';
import {INews} from "../../../_interfaces/news.interface";
import {ReportersService} from "../../../_sevices/reporters.service";

@Component({
    selector: 'app-reporters-list',
    templateUrl: './reporters-list.component.html',
    styleUrls: ['./reporters-list.component.scss']
})
export class ReportersListComponent implements OnInit {
    @Input() itemReporter!: INews;
    reporterFilter: any [] = [];

    constructor(private reportersService: ReportersService) {
    }

    ngOnInit(): void {
        if (this.itemReporter.hasReporter) {
            this.reportersService.getReporters().subscribe((res) => {
                this.reporterFilter = res.filter((o1) => {
                    return this.itemReporter.reporters.some(function (o2) {
                        return o1.id === o2;
                    });
                })
            })
        }
    }
}
