import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { NavheaderComponent } from './componets/navheader/navheader.component';
import { HomeComponent } from './componets/home/home.component';
import { DashboardComponent } from './componets/dashboard/dashboard.component';
import { EnterComponent } from './componets/enter/enter.component';
import { AdvertComponent } from './componets/advert/advert.component';
import { LoginComponent } from './componets/login/login.component';
import { RegisterComponent } from './componets/register/register.component';
import {AuthService} from './service/auth.service';
import {AuthGuard} from './guard/auth.guard'
import {NotAuthGuard} from './guard/noauth.guard'
@NgModule({
  declarations: [
    AppComponent,
    NavheaderComponent,
    HomeComponent,
    DashboardComponent,
    EnterComponent,
    AdvertComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [AuthService,AuthGuard,NotAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
