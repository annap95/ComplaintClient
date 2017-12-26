import {Component, OnInit} from "@angular/core";
import {FormGroup, AbstractControl, FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";

import {NbAuthBlockComponent} from "@nebular/auth";

@Component({
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  email: AbstractControl;
  password: AbstractControl;

  error: boolean;
  submitted: boolean = false;

  constructor(fb: FormBuilder, private router: Router) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required])],
      'password': ['', Validators.compose([Validators.required])]
    });
    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }

  ngOnInit() {
    // if(localStorage.getItem('authToken') && localStorage.getItem('userRole')) {
    //   this.router.navigate(['dashboard']);
    // }
  }

  login() {
    console.log("Przycisk");
    console.log(this.email.value);
    // if(!this.submitted && this.form.valid) {
    //   this.submitted = true;
      // return this.authenticationService.login(values['email'], values['password'])
      //   .subscribe(
      //     (data) => {
      //       let authToken = data.token;
      //       let userRole = data.userRole;
      //       this.authenticationService.authToken = authToken;
      //       this.authenticationService.userRole = userRole;
      //       localStorage.setItem('authToken', authToken);
      //       localStorage.setItem('userRole', userRole);
      //       this.error = false;
      //       this.router.navigate(['home']);
      //     },
      //     (error) => {
      //       this.form.reset();
      //       this.error = true;
      //       this.submitted = false;
      //     }
      //   );
    // }
  }
}
