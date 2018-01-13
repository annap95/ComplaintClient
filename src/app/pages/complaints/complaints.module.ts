import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { ComplaintsRoutingModule, routedComponents } from './complaints-routing.module';
import { ComplaintService } from "../../@core/services/complaint.service";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    ThemeModule,
    ComplaintsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RouterModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [
    ComplaintService
  ]
})
export class ComplaintsModule { }
