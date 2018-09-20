import { Injectable }       from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
}                           from '@angular/router';
import { AuthService }      from '../service/auth.service';

@Injectable()
export class NotAuthGuard implements CanActivate {
  constructor(
    private authService:AuthService,
    private router:Router
  ){}
  canActivate() {
    if(this.authService.loggedIn()){
      this.router.navigate(['/home'])
      return false;
    }else{  
      return true;
    } 
  }
}