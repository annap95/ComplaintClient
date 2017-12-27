import { Component, OnInit } from "@angular/core";
import { FormGroup, AbstractControl, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { AuthService } from "../../@core/services/auth.service";

@Component({
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  email: AbstractControl;
  password: AbstractControl;

  error: boolean;
  submitted: boolean = false;

  constructor(fb: FormBuilder, private router: Router, private authService: AuthService) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.email])],
      'password': ['', Validators.compose([Validators.required])]
    });
    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }

  ngOnInit() {
    if(this.authService.isLoggedIn()) {
      this.router.navigate(['dashboard']);
    }
  }

  login() {
    if(!this.submitted && this.form.valid) {
      this.submitted = true;
      return this.authService.login(this.email.value, this.password.value)
        .subscribe(
          (data) => {
            let authToken = data.token;
            let userRole = data.userRole;
            this.authService.authToken = authToken;
            this.authService.userRole = userRole;
            localStorage.setItem('authToken', authToken);
            localStorage.setItem('userRole', userRole);
            this.error = false;
            this.router.navigate(['home']);
          },
          (error) => {
            this.form.reset();
            this.error = true;
            this.submitted = false;
          }
        );
    }
  }

}
