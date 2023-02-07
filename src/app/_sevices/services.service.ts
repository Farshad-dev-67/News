import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {IServices} from "../_interfaces/services.interface";
import {services} from "../_mockData/service-mockData";

@Injectable()
export class ServicesService {

  constructor() { }
  
  getServices(): Observable<IServices[]>{
    return of(services);
  }
}
