import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";

@Injectable()
export class AuthService {

  authToken: string;
  userRole: string;
  url: string = "http://localhost:8080/";

  constructor(private http: Http) {
    this.authToken = localStorage.getItem('authToken');
    this.userRole = localStorage.getItem('userRole');
  }

  isLoggedIn(): boolean {
    return !!(localStorage.getItem('authToken') && localStorage.getItem('userRole'));
  }

  login(email: string, password: string) {
    let data = btoa(email + ":" + password);
    let headers = new Headers();
    headers.append("Authorization", data);
    return this.http.get(this.url + "user/login", {headers: headers})
      .map(response => {
        if(response.status != 200 || !response.json() || !response.json().token || !response.json().userRole) {
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
  }
}
