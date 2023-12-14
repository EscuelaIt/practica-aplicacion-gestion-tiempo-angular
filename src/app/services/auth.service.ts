import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { UserRegisterDto } from '../pages/user-register/user-register.dto';
import { ApiResponse } from '../pages/user-register/api-response';
import { Router } from '@angular/router';
import { UserLoginDto } from '../pages/login/user-login.dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private httpClient = inject(HttpClient);
  private router = inject(Router);
  private registerUrlApi = "https://timer.escuelait.com/api/auth/register";
  constructor() { }

  registerUser(value: UserRegisterDto): void {
    console.log(value);
    value.email = 'sinemail';
    this.httpClient.post<ApiResponse>(this.registerUrlApi, value).subscribe(res => {
      console.log('token', res.token);
      console.log('message', res.message);
      this.router.navigate(['/']);
    });
  }

  login(loginDto: UserLoginDto) {
    console.log(loginDto);
  }
}
