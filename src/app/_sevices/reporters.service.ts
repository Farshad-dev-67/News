import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {IReporters} from "../_interfaces/reporters.interface";
import {reporters} from "../_mockData/reporters-mockData";

@Injectable()
export class ReportersService {

  constructor() { }

  getReporters(): Observable<IReporters[]>{
    return of(reporters)
  }
}
