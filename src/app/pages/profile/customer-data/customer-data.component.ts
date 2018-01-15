import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import {UserService} from "../../../@core/services/user.service";
import {Customer} from "../../../@core/model/customer";
import {AuthService} from "../../../@core/services/auth.service";
import {CustomerPutRequest} from "../../../@core/model/requests/customer-put-request";

@Component({
  selector: 'customer-data',
  templateUrl: 'customer-data.component.html',
  styleUrls: ['customer-data.component.scss'],
})
export class CustomerDataComponent implements OnInit {

  form: FormGroup;
  customerId: AbstractControl;
  name: AbstractControl;
  surname: AbstractControl;
  streetName: AbstractControl;
  streetNumber: AbstractControl;
  postalCode: AbstractControl;
  town: AbstractControl;
  phone: AbstractControl;
  dataProcessingPermission: AbstractControl;

  error: boolean = false;
  success: boolean = false;
  submitted: boolean = false;

  editMode: boolean = false;

  customer: Customer;
  newCustomer: Customer;

  constructor(fb: FormBuilder, private userService: UserService, private authService: AuthService) {
    this.form = fb.group({
      'customerId': ['', Validators.compose([Validators.required])],
      'name': ['', Validators.compose([Validators.required])],
      'surname': ['', Validators.compose([Validators.required])],
      'streetName': ['', Validators.compose([Validators.required])],
      'streetNumber': ['', Validators.compose([Validators.required])],
      'postalCode': ['', Validators.compose([Validators.required])],
      'town': ['', Validators.compose([Validators.required])],
      'phone': ['', Validators.compose([Validators.required])],
      'dataProcessingPermission': ['', Validators.compose([Validators.required])]
    });
    this.customerId = this.form.controls['customerId'];
    this.name = this.form.controls['name'];
    this.surname = this.form.controls['surname'];
    this.streetName = this.form.controls['streetName'];
    this.streetNumber = this.form.controls['streetNumber'];
    this.postalCode = this.form.controls['postalCode'];
    this.town = this.form.controls['town'];
    this.phone = this.form.controls['phone'];
    this.dataProcessingPermission = this.form.controls['dataProcessingPermission'];

    this.customerId.disable();

    this.name.valueChanges.subscribe(val => this.newCustomer.name = val);
    this.surname.valueChanges.subscribe(val => this.newCustomer.surname = val);
    this.streetName.valueChanges.subscribe(val => this.newCustomer.streetName = val);
    this.streetNumber.valueChanges.subscribe(val => this.newCustomer.streetNumber = val);
    this.postalCode.valueChanges.subscribe(val => this.newCustomer.postalCode = val);
    this.town.valueChanges.subscribe(val => this.newCustomer.town = val);
    this.phone.valueChanges.subscribe(val => this.newCustomer.phone = val);
  }

  ngOnInit() {
    this.userService.getCustomer(+this.authService.getCustomerId())
      .subscribe(result => {
        this.customer = new Customer(result);
        this.newCustomer = new Customer(result);
        this.setViewMode();
        this.initWithValues();
      });
  }

  initWithValues() {
    this.customerId.setValue(this.customer.customerId);
    this.name.setValue(this.customer.name);
    this.surname.setValue(this.customer.surname);
    this.streetName.setValue(this.customer.streetName);
    this.streetNumber.setValue(this.customer.streetNumber);
    this.postalCode.setValue(this.customer.postalCode);
    this.town.setValue(this.customer.town);
    this.phone.setValue(this.customer.phone);
  }

  switchMode() {
    if(this.editMode)
      this.setViewMode();
    else
      this.setEditMode();
  }

  setViewMode() {
    this.editMode = false;
    this.name.disable();
    this.surname.disable();
    this.streetName.disable();
    this.streetNumber.disable();
    this.streetNumber.disable();
    this.postalCode.disable();
    this.town.disable();
    this.phone.disable();
  }

  setEditMode() {
    this.editMode = true;
    this.name.enable();
    this.surname.enable();
    this.streetName.enable();
    this.streetNumber.enable();
    this.streetNumber.enable();
    this.postalCode.enable();
    this.town.enable();
    this.phone.enable();
  }

  isFormValid(): boolean {
    return this.form.valid && !this.submitted &&
           this.dataProcessingPermission.value == true &&
           this.customer && this.newCustomer && !this.customer.equals(this.newCustomer);
  }

  updateCustomer() {
    if(!this.submitted && this.form.valid) {
      this.submitted = true;
      let request: CustomerPutRequest = {
        name: this.newCustomer.name,
        surname: this.newCustomer.surname,
        streetName: this.newCustomer.streetName,
        streetNumber: this.newCustomer.streetNumber,
        postalCode: this.newCustomer.postalCode,
        town: this.newCustomer.town,
        phone: this.newCustomer.phone,
        dataProcessingPermission: this.dataProcessingPermission.value
      };
      return this.userService.updateCustomer(this.customer.customerId, request).subscribe(
        (success) => {
          this.error = false;
          this.success = true;
          this.submitted = false;
          this.switchMode();
        },
        (error) => {
          this.error = true;
          this.success = false;
          this.submitted = false;
        }
      );
    }
  }
}
