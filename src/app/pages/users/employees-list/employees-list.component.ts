import {Component, OnInit} from "@angular/core";
import {Table} from "../../../@theme/ng2-smart-table/lib/data-source/table";
import {ServerDataSource} from "../../../@theme/ng2-smart-table/lib/data-source/server/server.data-source";
import {UserService} from "../../../@core/services/user.service";
import {PaginationRequest} from "../../../@core/model/pagination/pagination-request";
import {Observable} from "rxjs";
import {ButtonViewComponent} from "../../../@theme/ng2-smart-table/components/button-view.component";
import {AuthService} from "../../../@core/services/auth.service";
import {EmployeeUserPutRequest} from "../../../@core/model/requests/employee-user-put-request";

@Component({
  selector: 'employees-list',
  styleUrls: ['employees-list.component.scss'],
  templateUrl: 'employees-list.component.html',
})
export class EmployeesListComponent implements OnInit, Table {

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
      employeeId: {
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
      email: {
        title: 'E-mail',
        type: 'string',
      },
      userRole: {
        title: 'UserRole',
        type: 'string',
        valuePrepareFunction: (value) => { return value == 'ADMIN' ? 'Admin' : 'Consultant' },
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
      buttonEnable: {
        title: '',
        type: 'custom',
        filter: false,
        renderComponent: ButtonViewComponent,
        valuePrepareFunction: (value, row) => {
          if(row.employeeId == this.authService.getEmployeeId())
            return "";
          if(row.enabled)
            return "Disable";
          return "Enable";
        },
        onComponentInitFunction: (instance: any) => {
          instance.save.subscribe(row => {
            let employeeUserPutRequest = new EmployeeUserPutRequest();
            employeeUserPutRequest.enabled = !row.enabled;
            employeeUserPutRequest.userRole = row.userRole;
            return this.userService.updateEmployeeUser(row.employeeId, employeeUserPutRequest)
              .subscribe(res => {
                this.source.refresh();
              })
          });
        }
      },
      buttonRole: {
        title: '',
        type: 'custom',
        filter: false,
        renderComponent: ButtonViewComponent,
        valuePrepareFunction: (value, row) => {
          if(row.employeeId == this.authService.getEmployeeId())
            return "";
          if(row.userRole == 'ADMIN')
            return "Role Down";
          return "Role Up";
        },
        onComponentInitFunction: (instance: any) => {
          instance.save.subscribe(row => {
            let employeeUserPutRequest = new EmployeeUserPutRequest();
            employeeUserPutRequest.enabled = row.enabled;
            employeeUserPutRequest.userRole = row.userRole == 'ADMIN' ? 'CONSULTANT' : 'ADMIN';
            return this.userService.updateEmployeeUser(row.employeeId, employeeUserPutRequest)
              .subscribe(res => {
                this.source.refresh();
              })
          });
        }
      }
    },
  };

  source: ServerDataSource;

  constructor(private userService: UserService, private authService: AuthService) { }

  ngOnInit() {
    this.source = new ServerDataSource(this);
  }

  getResourcesList(paginationRequest: PaginationRequest): Observable<any> {
    return this.userService.getEmployees(paginationRequest);
  }

  getPageSize(): number {
    return 2;
  }

}
