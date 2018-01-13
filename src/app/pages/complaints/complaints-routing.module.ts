import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComplaintComponent } from "./add-complaint/add-complaint.component";
import { ComplaintsListComponent } from "./complaints-list/complaints-list.component";
import {ComplaintViewComponent} from "./complaint-view/complaint-view.component";


const routes: Routes = [{
  path: '',
  children: [{
    path: '',
    component: ComplaintsListComponent,
  }, {
    path: 'add',
    component: AddComplaintComponent,
  }, {
    path: ':id',
    component: ComplaintViewComponent,
  }],
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class ComplaintsRoutingModule {

}

export const routedComponents = [
  AddComplaintComponent,
  ComplaintsListComponent,
  ComplaintViewComponent
];
