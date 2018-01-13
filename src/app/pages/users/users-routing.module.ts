import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersListComponent } from "./customers-list/customers-list.component";
import { EmployeesListComponent } from "./employees-list/employees-list.component";

const routes: Routes = [{
  path: '',
  children: [{
    path: 'customers',
    component: CustomersListComponent,
  }, {
    path: 'employees',
    component: EmployeesListComponent,
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
];
