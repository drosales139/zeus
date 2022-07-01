import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { Employee } from 'src/app/shared/models/employee';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { CreateEmployeeDialogComponent } from '../../dialogs/create-employee-dialog/create-employee-dialog.component';

@Component({
  selector: 'employee',
  templateUrl: './employee.page.html',
  styleUrls: ['./employee.page.scss'],
})
export class EmployeeComponentPage implements OnInit {
  employees: Observable<Employee>[] = [];
  subscription!: Subscription;
  constructor(
    private dialog: MatDialog,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
     this.employeeService
      .getEmployees()
      .subscribe((response) => [(this.employees = response)]);
  }

  openModal() {
    this.dialog
      .open(CreateEmployeeDialogComponent, {
        disableClose: true,
      })
      .afterClosed()
      .subscribe((success: boolean) => {
        if (success) {
          setTimeout(() => {
            this.getEmployees();
          }, 500);
        }
      });
  }

 
}
