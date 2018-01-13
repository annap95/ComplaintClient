import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { ProfileRoutingModule, routedComponents } from './profile-routing.module';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {CustomerDataComponent} from "./customer-data/customer-data.component";
import {AuthService} from "../../@core/services/auth.service";
import {UserService} from "../../@core/services/user.service";

@NgModule({
  imports: [
    ThemeModule,
    ProfileRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RouterModule,
  ],
  declarations: [
    ...routedComponents,
    CustomerDataComponent
  ],
  exports: [
    CustomerDataComponent
  ],
  providers: [
    AuthService,
    UserService
  ]
})
export class ProfileModule { }
