import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DataPassingService {
  constructor() { }

  public timePeriod=new BehaviorSubject<any>([]);
//   cast= this.timePeriod.asObservable();

  sendData(data){
    this.timePeriod.next(data);
  }
}
