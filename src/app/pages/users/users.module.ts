import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { UsersRoutingModule, routedComponents } from './users-routing.module';
import { Ng2SmartTableModule } from "../../@theme/ng2-smart-table/ng2-smart-table.module";
import {UserService} from "../../@core/services/user.service";

@NgModule({
  imports: [
    ThemeModule,
    UsersRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [
    UserService
  ],
})
export class UsersModule { }
