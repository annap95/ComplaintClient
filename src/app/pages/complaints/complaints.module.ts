import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { ComplaintsRoutingModule, routedComponents } from './complaints-routing.module';
import { ComplaintService } from "../../@core/services/complaint.service";

@NgModule({
  imports: [
    ThemeModule,
    ComplaintsRoutingModule
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [
    ComplaintService
  ]
})
export class ComplaintsModule { }
