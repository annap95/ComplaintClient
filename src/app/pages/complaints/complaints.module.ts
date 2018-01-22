import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { ComplaintsRoutingModule, routedComponents } from './complaints-routing.module';
import { ComplaintService } from "../../@core/services/complaint.service";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Ng2SmartTableModule} from "../../@theme/ng2-smart-table/ng2-smart-table.module";
import {MessageViewComponent} from "./message-view/message-view.component";

@NgModule({
  imports: [
    ThemeModule,
    ComplaintsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RouterModule,
    Ng2SmartTableModule
  ],
  declarations: [
    ...routedComponents,
    MessageViewComponent
  ],
  providers: [
    ComplaintService
  ]
})
export class ComplaintsModule { }
