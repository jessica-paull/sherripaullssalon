import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Employee } from './employee.models';
import { Employees } from './data-employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployeeList(): Observable<Employee[]> {
    return of(Employees);
  }

}
