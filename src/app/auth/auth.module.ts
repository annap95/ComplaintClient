import { NgModule } from '@angular/core';

import {LoginComponent} from "./login/login.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {NbAuthModule} from "@nebular/auth";


@NgModule({
  imports: [
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    NbAuthModule],
  declarations: [
    LoginComponent,
  ]
})
export class AuthModule {}
