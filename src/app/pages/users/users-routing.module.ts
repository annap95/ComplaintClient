import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersListComponent } from "./customers-list/customers-list.component";
import { EmployeesListComponent } from "./employees-list/employees-list.component";
import { AddEmployeeComponent } from "./add-employee/add-employee.component";

const routes: Routes = [{
  path: '',
  children: [{
    path: 'customers',
    component: CustomersListComponent,
  }, {
    path: 'employees',
    children: [{
      path: '',
      component: EmployeesListComponent,
    }, {
      path: 'add',
      component: AddEmployeeComponent
    }]
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule { }

export const routedComponents = [
  CustomersListComponent,
  EmployeesListComponent,
  AddEmployeeComponent
];
