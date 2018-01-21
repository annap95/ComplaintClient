import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [ {
    path: 'users',
    loadChildren: './users/users.module#UsersModule',
  }, {
    path: 'complaints',
    loadChildren: './complaints/complaints.module#ComplaintsModule',
  }, {
    path: 'profile',
    loadChildren: './profile/profile.module#ProfileModule'
  }, {
    path: '',
    redirectTo: 'pages/complaints',
    pathMatch: 'full',
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
