import { AbstractControl } from '@angular/forms';

export function DropDownValidator(control: AbstractControl) {
  return control.value < 0 || control.value == null ? { required: true } : null;
}