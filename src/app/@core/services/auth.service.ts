import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { environment } from "../../../environments/environment";

@Injectable()
export class AuthService {

  authToken: string;
  userRole: string;
  url: string;

  constructor(private http: Http) {
    this.authToken = localStorage.getItem('authToken');
    this.userRole = localStorage.getItem('userRole');
    this.url = environment.url;
  }

  isLoggedIn(): boolean {
    return !!(localStorage.getItem('authToken') && localStorage.getItem('userRole'));
  }

  getUserRole(): string {
    return localStorage.getItem('userRole');
  }

  getCustomerId(): string {
    return localStorage.getItem('customerId');
  }

  getEmployeeId(): string {
    return localStorage.getItem('employeeId');
  }

  login(email: string, password: string) {
    let data = btoa(email + ":" + password);
    let headers = new Headers();
    headers.append("Authorization", data);
    return this.http.get(this.url + "auth/login", {headers: headers})
      .map(response => {
        if(response.status != 200 || !response.json() ||
           !response.json().token || !response.json().userRole) {
          throw new Error('Authentication failed');
        }
        else {
          return response.json();
        }
      });
  }

  logout() {
    this.authToken = null;
    this.userRole = null;
    localStorage.removeItem('authToken');
    localStorage.removeItem('userRole');
    localStorage.removeItem('customerId');
    localStorage.removeItem('employeeId');
  }

  registerCustomer(email: string, password: string) {
    let data = btoa(email + ":" + password);
    let headers = new Headers();
    headers.append("Authorization", data);
    return this.http.post(this.url + "auth/register/customer", null, {headers: headers});
  }
}
