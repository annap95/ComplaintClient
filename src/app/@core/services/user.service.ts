import { Injectable } from "@angular/core";

import { HttpWrapper } from "../http-wrapper";
import { environment } from "../../../environments/environment";
import {CustomerPutRequest} from "../model/requests/customer-put-request";

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

  updateCustomer(customerId: number, request: CustomerPutRequest) {
    return this.http.put(this.url + "user/customer/" + customerId, request);
  }
}
