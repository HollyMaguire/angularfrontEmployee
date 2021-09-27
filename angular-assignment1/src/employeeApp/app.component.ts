import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class EmployeelistComponent implements OnInit {

  public employees: any;
  public errorMsg: any;

    constructor(private empService: EmployeeService) { }

  ngOnInit(): void {
    this.employees = this.empService.getEmployees();
    this.empService.getEmployees().subscribe(
      (data:string ) => {this.employees = data; console.log(data)},
      (error:string) => this.errorMsg = error,
      () => console.log("Done")
    )
  }

}