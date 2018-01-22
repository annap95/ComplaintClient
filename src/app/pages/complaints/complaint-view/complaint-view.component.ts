import {Component, OnInit} from "@angular/core";
import {ComplaintService} from "../../../@core/services/complaint.service";
import {ActivatedRoute} from "@angular/router";
import {Complaint} from "../../../@core/model/complaint";

@Component({
  selector: 'complaint-view',
  styleUrls: ['complaint-view.component.scss'],
  templateUrl: 'complaint-view.component.html',
})
export class ComplaintViewComponent implements OnInit {

  complaint: Complaint;

  constructor(private complaintService: ComplaintService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let complaintId = params['id'];
      this.complaintService.getComplaint(complaintId).subscribe(res => this.complaint = res);
    });

  }

}
