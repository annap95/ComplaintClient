import {Component, Input} from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import {ComplaintService} from "../../../../@core/services/complaint.service";
import {ComplaintCustomerMessage} from "../../../../@core/model/requests/complaint-customer-message";

@Component({
  selector: 'add-message-customer',
  styleUrls: ['add-message-customer.component.scss'],
  templateUrl: 'add-message-customer.component.html',
})
export class AddMessageCustomerComponent {

  @Input()
  complaintId: number;

  form: FormGroup;
  message: AbstractControl;
  claim: AbstractControl;

  claims = ['REPAIR', 'SUBSTITUTION', 'PARTIALPAYBACK', 'FULLPAYBACK'];

  error: boolean = false;
  success: boolean = false;
  submitted: boolean = false;

  constructor(fb: FormBuilder, private complaintService: ComplaintService) {
    this.form = fb.group({
      'message': ['', Validators.compose([Validators.required])],
      'claim': ['', Validators.compose([Validators.required])],
    });
    this.message = this.form.controls['message'];
    this.claim = this.form.controls['claim'];
  }

  isFormValid(): boolean {
    return this.form.valid && !this.submitted;
  }

  addMessage() {
    if(!this.submitted && this.form.valid) {
      this.submitted = true;
      let request: ComplaintCustomerMessage = {
        message: this.message.value,
        claim: this.claim.value
      };
      return this.complaintService.addComplaintCustomerMessage(this.complaintId, request).subscribe(
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
