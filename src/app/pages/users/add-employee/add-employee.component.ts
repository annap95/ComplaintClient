import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../../@core/services/auth.service";
import { EqualPasswordsValidator } from "../../../@core/validators/equal-passwords-validator";
import {EmployeeAddRequest} from "../../../@core/model/requests/employee-add-request";

@Component({
  selector: 'add-employee',
  templateUrl: 'add-employee.component.html',
  styleUrls: ['add-employee.component.scss'],
})
export class AddEmployeeComponent {

  form: FormGroup;
  email: AbstractControl;
  passwords: FormGroup;
  password: AbstractControl;
  confirmPassword: AbstractControl;
  name: AbstractControl;
  surname: AbstractControl;
  role: AbstractControl;

  roles = ['CONSULTANT', 'ADMIN'];

  error: boolean = false;
  success: boolean = false;
  submitted: boolean = false;

  constructor(fb: FormBuilder, private authService: AuthService) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.email])],
      'passwords': fb.group({
        'password': ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(20)])],
        'confirmPassword': ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(20)])]
      }, {validator: EqualPasswordsValidator.validate('password', 'confirmPassword')}),
      'name': ['', Validators.compose([Validators.required])],
      'surname': ['', Validators.compose([Validators.required])],
      'role': ['', Validators.compose([Validators.required])]
    });
    this.email = this.form.controls['email'];
    this.passwords = <FormGroup> this.form.controls['passwords'];
    this.password = this.passwords.controls['password'];
    this.confirmPassword = this.passwords.controls['confirmPassword'];
    this.name = this.form.controls['name'];
    this.surname = this.form.controls['surname'];
    this.role = this.form.controls['role'];
  }

  isFormValid(): boolean {
    return this.form.valid && !this.submitted;
  }

  addEmployee() {
    if(!this.submitted && this.form.valid) {
      this.submitted = true;
      let request: EmployeeAddRequest = {
        name: this.name.value,
        surname: this.surname.value,
        userRole: this.role.value
      };
      return this.authService.registerEmployee(this.email.value, this.password.value, request)
        .subscribe(
          (data) => {
            this.form.reset();
            this.error = false;
            this.success = true;
            this.submitted = false;
          },
          (error) => {
            this.form.reset();
            this.error = true;
            this.success = false;
            this.submitted = false;
          });
    }
  }

}
