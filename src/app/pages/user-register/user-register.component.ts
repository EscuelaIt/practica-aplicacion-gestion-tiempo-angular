import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserRegisterService } from './user-register.service';
import { UserRegisterDto } from './user-register.dto';

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
      <em>{{ registerForm.status }}</em>
    </form>
  `,
  styles: ``,
})
export class UserRegisterComponent {
  private fb = inject(FormBuilder);
  private userRegisterService = inject(UserRegisterService);

  public registerForm = new FormGroup({
    name: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
    password: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
  });

  onSubmit() {
    const formValues = this.registerForm.value;
    const userRegisterDto: UserRegisterDto = {
      name: formValues.name!,
      email: formValues.email!,
      password: formValues.password!,
    } 
    this.userRegisterService.registerUser(userRegisterDto);
    
  }
}
