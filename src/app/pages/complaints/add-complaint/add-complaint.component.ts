import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ComplaintService } from "../../../@core/services/complaint.service";
import { ComplaintAddRequest } from "../../../@core/model/requests/complaint-add-request";

@Component({
  selector: 'add-complaint',
  styleUrls: ['add-complaint.component.scss'],
  templateUrl: 'add-complaint.component.html',
})
export class AddComplaintComponent {

  form: FormGroup;
  productDescription: AbstractControl;
  invoiceNumber: AbstractControl;
  purchaseDate: AbstractControl;
  price: AbstractControl;
  iban: AbstractControl;
  complaintReason: AbstractControl;
  claim: AbstractControl;
  dataProcessingPermission: AbstractControl;

  claims = ['REPAIR', 'SUBSTITUTION', 'PARTIALPAYBACK', 'FULLPAYBACK'];

  error: boolean = false;
  success: boolean = false;
  submitted: boolean = false;

  constructor(fb: FormBuilder, private complaintService: ComplaintService) {
    this.form = fb.group({
      'productDescription': ['', Validators.compose([Validators.required])],
      'invoiceNumber': ['', Validators.compose([Validators.required])],
      'purchaseDate': ['', Validators.compose([Validators.required])],
      'price': ['', Validators.compose([Validators.required])],
      'iban': ['', Validators.compose([Validators.required])],
      'complaintReason': ['', Validators.compose([Validators.required])],
      'claim': ['', Validators.compose([Validators.required])],
      'dataProcessingPermission': ['', Validators.compose([Validators.required])]
    });
    this.productDescription = this.form.controls['productDescription'];
    this.invoiceNumber = this.form.controls['invoiceNumber'];
    this.purchaseDate = this.form.controls['purchaseDate'];
    this.price = this.form.controls['price'];
    this.iban = this.form.controls['iban'];
    this.complaintReason = this.form.controls['complaintReason'];
    this.claim = this.form.controls['claim'];
    this.dataProcessingPermission = this.form.controls['dataProcessingPermission'];
  }

  isFormValid(): boolean {
    return this.form.valid && !this.submitted;
  }

  addComplaint() {
    if(!this.submitted && this.form.valid) {
      this.submitted = true;
      let complaint: ComplaintAddRequest = {
        productDescription: this.productDescription.value,
        invoiceNumber: this.invoiceNumber.value,
        purchaseDate: this.purchaseDate.value,
        price: this.price.value,
        iban: this.iban.value,
        message: this.complaintReason.value,
        claim: this.claim.value,
        dataProcessingPermission: this.dataProcessingPermission.value
      };
      return this.complaintService.addComplaint(complaint).subscribe(
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
