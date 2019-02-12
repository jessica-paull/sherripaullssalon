import { Component, OnInit } from '@angular/core';

import { Employee } from '../data/models.employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {

  employees: Employee[];
  headerId: String;
  headerTitle: String;
  headerSubtext: String;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
    this.headerId = 'staff-header';
    this.headerTitle = 'Meet our Staff';
    // tslint:disable-next-line:max-line-length
    this.headerSubtext = 'Our professional team prides itself on being up to date on the latest, most innovative techniques so that you can put your best self forward.';
  }

  getEmployees(): void {
    this.employeeService.getEmployeeList()
      .subscribe(employees => this.employees = employees);
  }

}
