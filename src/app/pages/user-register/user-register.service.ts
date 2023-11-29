import { Injectable, inject } from '@angular/core';
import { UserRegisterDto } from './user-register.dto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {
  private httpClient = inject(HttpClient);
  private registerUrlApi = "https://timer.escuelait.com/api/auth/register";

  constructor() { }

  registerUser(value: UserRegisterDto): void {
    this.httpClient.post(this.registerUrlApi, value).subscribe(res => console.log(res));
  }
}
