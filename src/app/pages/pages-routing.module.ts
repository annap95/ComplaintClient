import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { HomeComponent } from "./home/home.component";

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'home',
    component: HomeComponent
  }, {
    path: 'users',
    loadChildren: './users/users.module#UsersModule',
  }, {
    path: 'complaints',
    loadChildren: './complaints/complaints.module#ComplaintsModule',
  }, {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
