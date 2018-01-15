export class Employee {
  employeeId: number;
  name: string;
  surname: string;
  role: string;

  constructor(any: any) {
    this.employeeId = any.employeeId;
    this.name = any.name;
    this.surname = any.surname;
    this.role = any.role;
  }

  equals(employee: Employee): boolean {
    if(this.employeeId != employee.employeeId)
      return false;
    if(this.name != employee.name)
      return false;
    if(this.surname != employee.surname)
      return false;
    if(this.role != employee.role)
      return false;
    return true;
  }
}
