import { NgModule } from '@angular/core';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {CommonModule} from "@angular/common";
import { RouterModule } from '@angular/router';

import {BrowserModule} from "@angular/platform-browser";
import {NbAuthModule} from "@nebular/auth";
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {LogoutComponent} from "./logout/logout.component";

import {AuthService} from "../@core/services/auth.service";


@NgModule({
  imports: [
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RouterModule,
    NbAuthModule],
  declarations: [
    LoginComponent,
    RegisterComponent,
    LogoutComponent
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule {}
