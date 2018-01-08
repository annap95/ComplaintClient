import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

import { AuthService } from "./services/auth.service";

@Injectable()
export class HttpWrapper {

  constructor(private http: Http, private router: Router, private authService: AuthService) { }

  addAuthHeader(headers: Headers) {
    headers.append('AUTH-TOKEN', localStorage.getItem('authToken'));
  }

  handleErrors(observable) {
    return observable.catch(
      (error) => {
        if(error.status == 401) {
          this.authService.logout();
          this.router.navigate(['/auth/login']);
        }
        // 500
        // unauthorized
        return Observable.throw(error);
      });
  }

  get(url) {
    let headers = new Headers();
    this.addAuthHeader(headers);
    let observable = this.http.get(url, {headers: headers});
    return this.handleErrors(observable);
  }

  post(url, data) {
    let headers = new Headers();
    this.addAuthHeader(headers);
    let observable = this.http.post(url, data, {headers: headers});
    return this.handleErrors(observable);
  }

}
