import { Component, OnInit } from "@angular/core";
import { FormGroup, AbstractControl, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { EqualPasswordsValidator } from "../../@core/validators/equal-passwords-validator";
import { AuthService } from "../../@core/services/auth.service";

@Component({
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  email: AbstractControl;
  passwords: FormGroup;
  password: AbstractControl;
  confirmPassword: AbstractControl;

  error: boolean;
  success: boolean;

  submitted: boolean = false;

  constructor(fb: FormBuilder, private router: Router, private authService: AuthService) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.email])],
      'passwords': fb.group({
        'password': ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(20)])],
        'confirmPassword': ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(20)])]
      }, {validator: EqualPasswordsValidator.validate('password', 'confirmPassword')})
    });
    this.email = this.form.controls['email'];
    this.passwords = <FormGroup> this.form.controls['passwords'];
    this.password = this.passwords.controls['password'];
    this.confirmPassword = this.passwords.controls['confirmPassword'];
  }

  ngOnInit() {
    if(this.authService.isLoggedIn()) {
      this.router.navigate(['pages/complaints']);
    }
  }

  register() {
    if(!this.submitted && this.form.valid) {
      this.submitted = true;
      return this.authService.registerCustomer(this.email.value, this.password.value)
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
