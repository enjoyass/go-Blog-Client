import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { HomeComponent } from './componets/home/home.component';
import { DashboardComponent } from './componets/dashboard/dashboard.component';
import { LoginComponent } from './componets/login/login.component';
import { RegisterComponent } from './componets/register/register.component';

import {AuthGuard} from './guard/auth.guard'
import {NotAuthGuard} from './guard/noauth.guard'


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent,canActivate:[AuthGuard] },
  { path: 'dashboard', component: DashboardComponent ,canActivate:[AuthGuard]},
  { path: 'login', component: LoginComponent,canActivate:[NotAuthGuard] },
  { path: 'register', component: RegisterComponent,canActivate:[NotAuthGuard] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
