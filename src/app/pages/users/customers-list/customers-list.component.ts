import {Component, OnInit, EventEmitter, Input, Output} from '@angular/core';

import {UserService} from "../../../@core/services/user.service";
import {PaginationRequest} from "../../../@core/model/pagination/pagination-request";
import {ServerDataSource} from "../../../@theme/ng2-smart-table/lib/data-source/server/server.data-source";
import {Table} from "../../../@theme/ng2-smart-table/lib/data-source/table";
import {Observable} from "rxjs";
import {CustomerUserPutRequest} from "../../../@core/model/requests/customer-user-put-request";
import {ButtonViewComponent} from "../../../@theme/ng2-smart-table/components/button-view.component";

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
    mode: 'external',
    actions: {
      columnTitle: '',
      add: false,
      edit: false,
      delete: false,
      custom: [],
      position: 'left', // left|right
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
        valuePrepareFunction: (value) => { return value ? 'Yes' : 'No' },
        filter: {
          type: 'checkbox',
          // config: {
          //   true: 'Yes',
          //   false: 'No',
          //   resetText: 'clear',
          // },
        },
      },
      button: {
        title: '',
        type: 'custom',
        filter: false,
        renderComponent: ButtonViewComponent,
        valuePrepareFunction: (value, row) => {
          if(row.enabled)
            return "Disable";
          return "Enable";
        },
        onComponentInitFunction: (instance: any) => {
          instance.save.subscribe(row => {
            let customerUserPutRequest = new CustomerUserPutRequest();
            customerUserPutRequest.enabled = !row.enabled;
            console.log(customerUserPutRequest);
            return this.userService.updateCustomerUser(row.customerId, customerUserPutRequest)
              .subscribe(res => {
                console.log(res);
                this.source.refresh();
              });
          });
        }
      },
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


