import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reporters-list',
  templateUrl: './reporters-list.component.html',
  styleUrls: ['./reporters-list.component.scss']
})
export class ReportersListComponent {
  @Input() reporterList: any;
}
