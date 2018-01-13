import { FormGroup } from "@angular/forms";

export class EqualPasswordsValidator {

  public static validate(passwordField1, passwordField2) {
    return (formGroup: FormGroup) => {
      return (formGroup.controls &&
              formGroup.controls[passwordField1].value == formGroup.controls[passwordField2].value) ? null : {
                passwordsEqual: {
                  valid: false
                }
              };
    }
  }

}
