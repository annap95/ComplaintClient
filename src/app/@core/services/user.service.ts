import { Injectable } from "@angular/core";

import { HttpWrapper } from "../http-wrapper";
import { environment } from "../../../environments/environment";
import {Customer} from "../model/customer";

@Injectable()
export class UserService {
  url: string;

  constructor(private http: HttpWrapper) {
    this.url = environment.url;
  }

  // addComplaint(complaint: ComplaintAddRequest) {
  //   return this.http.post(this.url + "complaint", complaint);
  // }

  getCustomer(customerId: number) {
    return this.http.get(this.url + "user/customer/" + customerId)
      .map(res => res.json());
  }

  updateCustomer(customer: Customer) {
    return this.http.put(this.url, customer);
  }
}
