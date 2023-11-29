import { Injectable, inject } from '@angular/core';
import { UserRegisterDto } from './user-register.dto';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from './api-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {
  private httpClient = inject(HttpClient);
  private registerUrlApi = "https://timer.escuelait.com/api/auth/register";
  constructor() { }

  registerUser(value: UserRegisterDto): void {
    this.httpClient.post<ApiResponse>(this.registerUrlApi, value).subscribe(res => {
      console.log('token', res.token);
      console.log('message', res.message);
    });
  }
}


