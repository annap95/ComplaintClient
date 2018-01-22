import { Injectable } from "@angular/core";

import { HttpWrapper } from "../http-wrapper";
import { ComplaintAddRequest } from "../model/requests/complaint-add-request";
import { environment } from "../../../environments/environment";
import { PaginationRequest } from "../model/pagination/pagination-request";
import {ComplaintCustomerMessage} from "../model/requests/complaint-customer-message";
import {ComplaintEmployeeMessage} from "../model/requests/complaint-employee-message";

@Injectable()
export class ComplaintService {
  url: string;

  constructor(private http: HttpWrapper) {
    this.url = environment.url;
  }

  addComplaint(complaint: ComplaintAddRequest) {
    return this.http.put(this.url + "complaint", complaint);
  }

  addComplaintCustomerMessage(complaintId: number, request: ComplaintCustomerMessage) {
    return this.http.post(this.url + "/complaint/" + complaintId + "/customer", request);
  }

  addComplaintEmployeeMessage(complaintId: number, request: ComplaintEmployeeMessage) {
    return this.http.post(this.url + "/complaint/" + complaintId + "/employee", request);
  }

  getComplaints(request: PaginationRequest) {
    return this.http.post(this.url + "complaint", request);
  }

  getComplaint(complaintId: number) {
    return this.http.get(this.url + "complaint/" + complaintId)
      .map(res => res.json());
  }

}
