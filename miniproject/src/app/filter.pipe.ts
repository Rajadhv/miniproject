import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(employedata: any, searchText: any): any {
    console.log('employeedata', employedata);
    console.log('searchtext', searchText);
    // if (!employeedata)return null;
    if (!searchText) {
      return employedata;
    }
    let search = searchText?.toLowerCase();
    return employedata.filter((element: any) => {
      return JSON.stringify(element).toLocaleLowerCase().includes(search);
    });
  }
}
