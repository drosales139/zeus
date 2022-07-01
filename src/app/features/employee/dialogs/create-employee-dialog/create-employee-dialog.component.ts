import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Employee } from 'src/app/shared/models/employee';
import { EmployeeService } from 'src/app/shared/services/employee.service';

@Component({
  selector: 'app-create-employee-dialog',
  templateUrl: './create-employee-dialog.component.html',
  styleUrls: ['./create-employee-dialog.component.scss']
})
export class CreateEmployeeDialogComponent implements OnInit {

  constructor(
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {}

  createOrder(response:Employee) {
    this.employeeService.createEmploye(response);
  }

}
