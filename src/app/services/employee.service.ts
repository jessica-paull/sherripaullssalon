import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Employee } from '../data/models.employee';
import { Employees } from '../data/data-employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployeeList(): Observable<Employee[]> {
    return of(Employees);
  }

}
