import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt'
import {AuthService} from './auth.service'
@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  domain="http://localhost:3000";
  authToken;
  options;

  constructor(
    private http:Http
  ) { }
  loadToken(){
    const token=localStorage.getItem('token');
    this.authToken=token;
  }
  createAuthenticationHeaders(){
    this.loadToken();
    this.options=new RequestOptions({
      headers:new Headers({
        'Content-type':'Application/json',
        'authorization':"beare "+this.authToken
      })
    })
  }
  getProfile(){
    this.createAuthenticationHeaders()
    return this.http.post(this.domain+'/findArticle',"",this.options).map(res=>res.json());
  }
}
