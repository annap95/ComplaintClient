import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { UsersRoutingModule, routedComponents } from './users-routing.module';
import { Ng2SmartTableModule } from "../../@theme/ng2-smart-table/ng2-smart-table.module";
import { UserService } from "../../@core/services/user.service";
import { ButtonViewComponent } from "../../@theme/ng2-smart-table/components/button-view.component";

@NgModule({
  imports: [
    ThemeModule,
    UsersRoutingModule,
    Ng2SmartTableModule,
  ],
  entryComponents: [
    ButtonViewComponent
  ],
  declarations: [
    ...routedComponents
  ],
  providers: [
    UserService
  ],
})
export class UsersModule { }
