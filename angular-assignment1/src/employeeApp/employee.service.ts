import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url: string = "http://localhost:4200/api/employees";

  constructor(private http: HttpClient) { }

  public employees = [
    { "name": "Bobby", "gender": "Male", "age": "13", "position": "Jr", "position": "Jr" },
    { "name": "Hank", "gender": "Male", "age": "43", "position": "Sr", "position": "Jr" },
    { "name": "Dale", "gender": "Male", "age": "44", "position": "Sr", "position": "Jr" },
    { "name": "Peggy", "gender": "Feale", "age": "42", "position": "Sr", "position": "Jr"  },
  ]

  getEmployees(){
    return this.employees;
  
}