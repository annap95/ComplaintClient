import { Injectable } from "@angular/core";

import { HttpWrapper } from "../http-wrapper";
import { ComplaintAddRequest } from "../model/requests/complaint-add-request";
import { environment } from "../../../environments/environment";
import { PaginationRequest } from "../model/pagination/pagination-request";

@Injectable()
export class ComplaintService {
  url: string;

  constructor(private http: HttpWrapper) {
    this.url = environment.url;
  }

  addComplaint(complaint: ComplaintAddRequest) {
    return this.http.put(this.url + "complaint", complaint);
  }

  getComplaints(request: PaginationRequest) {
    return this.http.post(this.url + "complaint", request);
  }

  getComplaint(complaintId: number) {
    return this.http.get(this.url + "complaint/" + complaintId)
      .map(res => res.json());
  }

}
