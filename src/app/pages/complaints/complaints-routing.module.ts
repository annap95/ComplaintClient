import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComplaintComponent } from "./add-complaint/add-complaint.component";


const routes: Routes = [{
  path: '',
  children: [{
    path: 'add',
    component: AddComplaintComponent,
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
  AddComplaintComponent
];
