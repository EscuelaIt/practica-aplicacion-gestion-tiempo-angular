import { Routes } from '@angular/router';
import { UserRegisterComponent } from './pages/user-register/user-register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
  { path: 'register', component: UserRegisterComponent,},
  { path: '', component: DashboardComponent,}
];
