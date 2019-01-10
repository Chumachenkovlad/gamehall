import { FormGroup } from '@angular/forms';

export abstract class BaseFormComponent {
  abstract form: FormGroup;
  abstract onSubmit(): void;
  abstract initForm(): void;

  submit() {
    if (this.form.valid) {
      this.onSubmit();
    } else {
      Object.values(this.form.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }
}
