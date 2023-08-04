import { Component } from '@angular/core';
import { CommonapicallService } from './common/commonapicall.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'miniproject';
  employeedata!: any;
  searchBoxVal: any;
  inp: any;
  inputValue: any;
  tableHeading: any[] = [' Name', ' Email', ' phone', ' Address', ' gender'];
  constructor(private apicallservice: CommonapicallService) {}
  ngOnInit() {
    this.getemployeedetails();
  }
  async getemployeedetails() {
    let endpoint = 'employee';
    this.employeedata = await this.apicallservice
      .getapicall(endpoint)
      .toPromise();
    console.log('employedata', this.employeedata);
  }
  inptVal(val: any) {
    console.log('val', val.target.value);
    console.log('inputValue', this.inputValue);

    this.inp = val.target.value;
  }
  searchBoxValue() {
    console.log(this.inputValue);

    this.searchBoxVal = this.inputValue;
  }
}
