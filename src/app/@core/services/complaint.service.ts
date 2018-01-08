import { Injectable } from "@angular/core";
import { HttpWrapper } from "../http-wrapper";
import { ComplaintAddRequest } from "../model/requests/complaint-add-request";

@Injectable()
export class ComplaintService {
  url: string = "http://localhost:8080/";

  constructor(private http: HttpWrapper) { }

  addComplaint(complaint: ComplaintAddRequest) {
    return this.http.post(this.url + "complaint", complaint);
  }
}
