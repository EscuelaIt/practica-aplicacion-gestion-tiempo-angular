import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { UserLoginDto } from './user-login.dto';

@Component({
  selector: 'wta-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <form [formGroup]="loginForm" (submit)="onSubmit()">
      <label for="email">Email</label>
      <input formControlName="email" name="email" type="text">
      <label for="password">Password</label>
      <input formControlName="password" name="password" type="password">
      <button [disabled]="!loginForm.valid" type="submit">Iniciar</button>
    </form>
  `,
  styles: ``
})
export class LoginComponent {
  
  public loginForm = new FormGroup({
    email: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    password: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
  });

  private authService = inject(AuthService);

  onSubmit() {
    const formValues = this.loginForm.value;
    const loginDto: UserLoginDto = {
      email: formValues.email!,
      password: formValues.password!,
    } 
    this.authService.login(loginDto);
    
  }
}
