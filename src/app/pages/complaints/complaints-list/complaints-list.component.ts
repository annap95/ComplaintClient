import { Component, OnInit } from "@angular/core";
import { ServerDataSource } from "../../../@theme/ng2-smart-table/lib/data-source/server/server.data-source";
import { Table } from "../../../@theme/ng2-smart-table/lib/data-source/table";
import { PaginationRequest } from "../../../@core/model/pagination/pagination-request";
import { Observable } from "rxjs";
import { ComplaintService } from "../../../@core/services/complaint.service";
import {Router} from "@angular/router";

@Component({
  selector: 'complaints-list',
  styleUrls: ['complaints-list.component.scss'],
  templateUrl: 'complaints-list.component.html',
})
export class ComplaintsListComponent implements OnInit, Table {

  settings = {
    mode: 'external',
    actions: {
      columnTitle: '',
      add: false,
      edit: true,
      delete: false,
      custom: [],
      position: 'right',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>'
    },
    columns: {
      complaintId: {
        title: 'ID',
        type: 'number'
      },
      status: {
        title: 'Status',
        type: 'string'
      },
      submitDate: {
        title: 'Submit date',
        type: 'date'
      },
      name: {
        title: 'Name',
        type: 'string'
      },
      surname: {
        title: 'Surname',
        type: 'string'
      }
    }
  }

  source: ServerDataSource;

  constructor(private complaintService: ComplaintService, private router: Router) { }

  ngOnInit() {
    this.source = new ServerDataSource(this);
  }

  getResourcesList(paginationRequest: PaginationRequest): Observable<any> {
    return this.complaintService.getComplaints(paginationRequest);
  }

  getPageSize(): number {
    return 2;
  }

  viewComplaint(event: any) {
    let complaintId = event.data.complaintId;
    return this.router.navigate(['pages/complaints/' + complaintId]);
  }

}
