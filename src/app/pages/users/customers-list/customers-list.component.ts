import {Component, OnInit} from '@angular/core';

import {UserService} from "../../../@core/services/user.service";
import {PaginationRequest} from "../../../@core/model/pagination/pagination-request";
import {ServerDataSource} from "../../../@theme/ng2-smart-table/lib/data-source/server/server.data-source";
import {Table} from "../../../@theme/ng2-smart-table/lib/data-source/table";
import {Observable} from "rxjs";

@Component({
  selector: 'customers-list',
  templateUrl: 'customers-list.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class CustomersListComponent implements OnInit, Table {

  settings = {
    actions: {
      columnTitle: 'Actions',
      add: false,
      edit: true,
      delete: false,
      custom: [],
      position: 'right', // left|right
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    columns: {
      customerId: {
        title: 'ID',
        type: 'number',
      },
      name: {
        title: 'Name',
        type: 'string',
      },
      surname: {
        title: 'Surname',
        type: 'string',
      },
      streetName: {
        title: 'Street name',
        type: 'string',
      },
      streetNumber: {
        title: 'Street number',
        type: 'string',
      },
      postalCode: {
        title: 'Postal code',
        type: 'string',
      },
      town: {
        title: 'Town',
        type: 'string',
      },
      phone: {
        title: 'Phone',
        type: 'string',
      },
      email: {
        title: 'E-mail',
        type: 'string',
      },
      enabled: {
        title: 'Enabled',
        type: 'boolean',
        filter: {
          type: 'checkbox',
          // config: {
          //   true: 'Yes',
          //   false: 'No',
          //   resetText: 'clear',
          // },
        },
      }
    },
  };

  source: ServerDataSource;


  constructor(private userService: UserService) { }

  ngOnInit() {
    this.source = new ServerDataSource(this);
  }

  getResourcesList(paginationRequest: PaginationRequest): Observable<any> {
    return this.userService.getCustomers(paginationRequest);
  }

  getPageSize(): number {
    return 2;
  }
}
