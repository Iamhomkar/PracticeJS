import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilteringService {

  constructor() { }
  filterStream: Subject<any> = new Subject();
  publishToStream(property,ord){
    this.filterStream.next({prop:property,order:ord});
  }
  setFilterProps(prop,order) {
    this.publishToStream(prop,order)
  }
  getFilterStream(){
    return this.filterStream;
  }
}
