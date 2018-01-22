import {Component, Input} from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import {ComplaintService} from "../../../../@core/services/complaint.service";
import {ComplaintEmployeeMessage} from "../../../../@core/model/requests/complaint-employee-message";

@Component({
  selector: 'add-message-employee',
  styleUrls: ['add-message-employee.component.scss'],
  templateUrl: 'add-message-employee.component.html',
})
export class AddMessageEmployeeComponent {

  @Input()
  complaintId: number;

  form: FormGroup;
  message: AbstractControl;
  claim: AbstractControl;
  decision: AbstractControl;

  claims = ['REPAIR', 'SUBSTITUTION', 'PARTIALPAYBACK', 'FULLPAYBACK'];
  decisions = ['ACCEPT', 'REJECT'];

  error: boolean = false;
  success: boolean = false;
  submitted: boolean = false;

  constructor(fb: FormBuilder, private complaintService: ComplaintService) {
    this.form = fb.group({
      'message': ['', Validators.compose([Validators.required])],
      'claim': ['', Validators.compose([Validators.required])],
      'decision': ['', Validators.compose([Validators.required])]
    });
    this.message = this.form.controls['message'];
    this.claim = this.form.controls['claim'];
    this.decision = this.form.controls['decision'];
  }

  isFormValid(): boolean {
    return this.form.valid && !this.submitted;
  }

  addMessage() {
    if(!this.submitted && this.form.valid) {
      this.submitted = true;
      let request: ComplaintEmployeeMessage = {
        message: this.message.value,
        claim: this.claim.value,
        decision: this.decision.value
      };
      return this.complaintService.addComplaintEmployeeMessage(this.complaintId, request).subscribe(
        (success) => {
          this.form.reset();
          this.error = false;
          this.success = true;
          this.submitted = false;
        },
        (error) => {
          this.error = true;
          this.success = false;
          this.submitted = false;
        }
      )

    }
  }

}
