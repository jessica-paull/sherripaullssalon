import { Component, OnInit } from '@angular/core';

import { Employee } from '../employee.models';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {

  employees: Employee[];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService.getEmployeeList()
      .subscribe(employees => this.employees = employees);
  }

}
