import { Injectable } from '@angular/core';

import { Http,Headers,RequestOptions } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt'
import 'rxjs/Rx'

@Injectable()
export class AuthService {

  domain="http://localhost:3000"
  authToken;
  user;
  options;

  constructor(
    private http:Http
  ) { }

  createAuthenticationHeaders(){
    this.loadToken();
    this.options=new RequestOptions({
      headers:new Headers({
        'Content-type':'Application/json',
        'authorization':this.authToken
      })
    })
  }
  loadToken(){
    const token=localStorage.getItem('token');
    this.authToken=token;
  }

  Register(user){
    return this.http.post(this.domain+'/register',user).map(res=>res.json());
  }

  checkUsername(username){
    return this.http.post(this.domain+'/checkUsername/',username).map(res=>res.json());
  }

  checkEmail(email){
    return this.http.post(this.domain+'/checkEmail/',email).map(res=>res.json());
  }

  Login(user){
    return this.http.post(this.domain+'/login',user).map(res=>res.json());
  }
  logout() {
    localStorage.clear();
  }

  storeUserData(token,user){
    localStorage.setItem('token',token)
    localStorage.setItem('user',JSON.stringify(user))
    this.authToken=token;
    this.user=user;
  }

  getProfile(){
    this.createAuthenticationHeaders();
    return this.http.get(this.domain+'/profile',this.options).map(res=>res.json());
  }

  loggedIn() {
    return tokenNotExpired();
  }
}
