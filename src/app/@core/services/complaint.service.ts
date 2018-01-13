import { Injectable } from "@angular/core";

import { HttpWrapper } from "../http-wrapper";
import { ComplaintAddRequest } from "../model/requests/complaint-add-request";
import { environment } from "../../../environments/environment";

@Injectable()
export class ComplaintService {
  url: string;

  constructor(private http: HttpWrapper) {
    this.url = environment.url;
  }

  addComplaint(complaint: ComplaintAddRequest) {
    return this.http.post(this.url + "complaint", complaint);
  }
}
