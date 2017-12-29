import { NgModule } from '@angular/core';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {CommonModule} from "@angular/common";
import { RouterModule } from '@angular/router';

import {BrowserModule} from "@angular/platform-browser";
import {NbAuthModule} from "@nebular/auth";
import {HomeAdminComponent} from "./home-admin/home-admin.component";
import {HomeCustomerComponent} from "./home-customer/home-customer.component";
import {HomeConsultantComponent} from "./home-consultant/home-consultant.component";
import {HomeComponent} from "./home.component";

@NgModule({
  imports: [
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RouterModule,
    NbAuthModule],
  declarations: [
    HomeAdminComponent,
    HomeConsultantComponent,
    HomeCustomerComponent,
    HomeComponent
  ],
  providers: [
  ]
})
export class HomeModule {}
