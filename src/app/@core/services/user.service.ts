import { Injectable } from "@angular/core";

import { HttpWrapper } from "../http-wrapper";
import { environment } from "../../../environments/environment";

import { CustomerPutRequest } from "../model/requests/customer-put-request";
import { EmployeePutRequest } from "../model/requests/employee-put-request";
import {PaginationRequest} from "../model/pagination/pagination-request";
import {CustomerUserPutRequest} from "../model/requests/customer-user-put-request";

@Injectable()
export class UserService {
  url: string;

  constructor(private http: HttpWrapper) {
    this.url = environment.url;
  }

  getCustomer(customerId: number) {
    return this.http.get(this.url + "user/customer/" + customerId)
      .map(res => res.json());
  }

  updateCustomer(customerId: number, request: CustomerPutRequest) {
    return this.http.put(this.url + "user/customer/" + customerId, request);
  }

  updateCustomerUser(customerId: number, request: CustomerUserPutRequest) {
    return this.http.put(this.url + "user/customer/" + customerId + "/user", request);
  }

  getCustomers(request: PaginationRequest) {
    return this.http.post(this.url + "user/customer", request);
  }

  getEmployee(employeeId: number) {
    return this.http.get(this.url + "user/employee/" + employeeId)
      .map(res => res.json());
  }

  updateEmployee(employeeId: number, request: EmployeePutRequest) {
    return this.http.put(this.url + "user/employee/" + employeeId, request);
  }
}
