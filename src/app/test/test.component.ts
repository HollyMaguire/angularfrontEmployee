import { Component, OnInit } from '@angular/core';

class Employee {
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  position: string;
  salary: number;
  department: string;
 
  constructor(firstName: string, lastName: string, age: number, gender: string,  department: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.position = age < 40 ? "Jr.Employee" : "Sr.Employee"
    this.salary = age  <40 ? age*5 +50000 : age*10 +50000
    this.department = department;
  }
}

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  employees: Employee[] = [];
  selectedEmployee: Employee | undefined;
  constructor() { }

  ngOnInit(): void {
    this.employees = [new Employee("Jill", "May", 24, "female", "accounting"), new Employee("Hank", "Hill", 45, "male", "Managment"), new Employee("Dale", "Gribble", 45, "male", "field") ];
  }
  selectEmployee(employee: Employee) { this.selectedEmployee = employee; }
}
