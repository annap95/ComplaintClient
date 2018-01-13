export class Customer {
  customerId: number;
  name: string;
  surname: string;
  streetName: string;
  streetNumber: string;
  postalCode: string;
  town: string;
  phone: string;

  constructor(any: any) {
    this.customerId = any.customerId;
    this.name = any.name;
    this.surname = any.surname;
    this.streetName = any.streetName;
    this.streetNumber = any.streetNumber;
    this.postalCode = any.postalCode;
    this.town = any.town;
    this.phone = any.phone;
  }

  equals(customer: Customer): boolean {
    if(this.customerId != customer.customerId)
      return false;
    if(this.name != customer.name)
      return false;
    if(this.surname != customer.surname)
      return false;
    if(this.streetName != customer.streetName)
      return false;
    if(this.streetNumber != customer.streetNumber)
      return false;
    if(this.postalCode != customer.postalCode)
      return false;
    if(this.town != customer.town)
      return false;
    if(this.phone != customer.phone)
      return false;
    return true;
  }
}
