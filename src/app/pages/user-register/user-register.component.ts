import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'wta-user-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <form [formGroup]="registerForm" (submit)="onSubmit()">
      <div>
        <label for="name">Name</label>
        <input formControlName="name" name="name" type="text"/>
        <label for="email">Email</label>
        <input formControlName="email" name="email"/>
        <label for="password">Password</label>
        <input formControlName="password" name="password" type="password"/>
      </div>
      <div>
        <button type="submit" [disabled]="!registerForm.valid">Guardar</button>
      </div>
    </form>
  `,
  styles: ``,
})
export class UserRegisterComponent {
  private fb = inject(FormBuilder);
  public registerForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  onSubmit() {
    console.log(this.registerForm.value);
  }
}
