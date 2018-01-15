import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from "../../../@core/services/user.service";
import { AuthService } from "../../../@core/services/auth.service";
import { Employee } from "../../../@core/model/employee";
import {EmployeePutRequest} from "../../../@core/model/requests/employee-put-request";

@Component({
  selector: 'employee-data',
  templateUrl: 'employee-data.component.html',
  styleUrls: ['employee-data.component.scss'],
})
export class EmployeeDataComponent implements OnInit {

  form: FormGroup;
  employeeId: AbstractControl;
  name: AbstractControl;
  surname: AbstractControl;
  role: AbstractControl;

  error: boolean = false;
  success: boolean = false;
  submitted: boolean = false;

  editMode: boolean = false;

  employee: Employee;
  newEmployee: Employee;

  constructor(fb: FormBuilder, private userService: UserService, private authService: AuthService) {
    this.form = fb.group({
      'employeeId': ['', Validators.compose([Validators.required])],
      'name': ['', Validators.compose([Validators.required])],
      'surname': ['', Validators.compose([Validators.required])],
      'role': ['', Validators.compose([Validators.required])]
    });
    this.employeeId = this.form.controls['employeeId'];
    this.name = this.form.controls['name'];
    this.surname = this.form.controls['surname'];
    this.role = this.form.controls['role'];

    this.employeeId.disable();
    this.role.disable();

    this.name.valueChanges.subscribe(val => this.newEmployee.name = val);
    this.surname.valueChanges.subscribe(val => this.newEmployee.surname = val);
  }

  ngOnInit() {
    this.userService.getEmployee(+this.authService.getEmployeeId())
      .subscribe(result => {
        this.employee = new Employee(result);
        this.newEmployee = new Employee(result);
        this.setViewMode();
        this.initWithValues();
      });
  }

  initWithValues() {
    this.employeeId.setValue(this.employee.employeeId);
    this.name.setValue(this.employee.name);
    this.surname.setValue(this.employee.surname);
    this.role.setValue(this.employee.role);
  }

  switchMode() {
    if(this.editMode)
      this.setViewMode();
    else
      this.setEditMode();
  }

  setViewMode() {
    this.editMode = false;
    this.name.disable();
    this.surname.disable();
  }

  setEditMode() {
    this.editMode = true;
    this.name.enable();
    this.surname.enable();
  }

  isFormValid(): boolean {
    return this.form.valid && !this.submitted &&
      this.employee && this.newEmployee && !this.employee.equals(this.newEmployee);
  }

  updateEmployee() {
    if(!this.submitted && this.form.valid) {
      this.submitted = true;
      let request: EmployeePutRequest = {
        name: this.newEmployee.name,
        surname: this.newEmployee.surname,
        userRole: this.newEmployee.role
      };
      return this.userService.updateEmployee(this.employee.employeeId, request).subscribe(
        (success) => {
          this.error = false;
          this.success = true;
          this.submitted = false;
          this.switchMode();
        },
        (error) => {
          this.error = true;
          this.success = false;
          this.submitted = false;
        }
      );
    }
  }
}
