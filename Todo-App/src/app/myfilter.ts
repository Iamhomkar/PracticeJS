import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';
@Pipe({
  name: 'sortfilter'
})
export class SortFilter implements PipeTransform {

  transform(value: any[], column:string,order:''): any {
    console.log("params are ",column,order)
    if (!value || !column || column === '' || order === '') { return value; } // no array
    if (value.length <= 1) { return value; } // array with only one item
    if(column==="title")
    {
      console.log("title sort in ",order)
      return _.orderBy(value,[user=>user[column].toLowerCase()],[order])
    }
    return _.orderBy(value,[column],[order])
  }
}
