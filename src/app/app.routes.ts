import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'register', loadComponent: ()=>import('./pages/user-register/user-register.component').then(c => c.UserRegisterComponent),},
  { path: 'login', loadComponent: ()=>import('./pages/login/login.component').then(c => c.LoginComponent),},
  { path: 'dashboard', loadComponent: ()=>import('./pages/dashboard/dashboard.component').then(c => c.DashboardComponent),},
  { path: 'main', loadComponent: ()=>import('./pages/main/main.component').then(c => c.MainComponent),},
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: '**', redirectTo: '/main', pathMatch: 'full' }
];
