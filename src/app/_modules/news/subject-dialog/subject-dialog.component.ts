import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {IServices} from "../../../_interfaces/services.interface";

@Component({
  selector: 'app-subject-dialog',
  templateUrl: './subject-dialog.component.html',
  styleUrls: ['./subject-dialog.component.scss']
})
export class SubjectDialogComponent implements OnInit{
  subjectList!: any;
  getItem!: IServices;
  constructor( public dialogRef: MatDialogRef<SubjectDialogComponent>,
               @Inject(MAT_DIALOG_DATA) public data: IServices) {
  }
  ngOnInit(): void {
    this.subjectList = this.data;
  }
  sendItemAfterClose(item: IServices){
    this.getItem = item;
    this.dialogRef.close(this.getItem);
  }
  onNoClick(){
    this.dialogRef.close();
  }
}
