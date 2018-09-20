import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'
import {AuthService} from '../../service/auth.service'
import {Router} from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  messageClass;
  message;
  form:FormGroup;
  processing=false;

  constructor(
    private fd:FormBuilder,
    private authService:AuthService,
    private router:Router
  ) {
    this.createForm()
  }

  ngOnInit() {
  }

  createForm(){
    this.form=this.fd.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

  disableForm(){
    this.form.addControl['email'].disable()
    this.form.addControl['password'].disable()
  }

  enableForm(){
    this.form.addControl['email'].enable()
    this.form.addControl['password'].enable()
  }

  onLogin(){
    this.processing=true;
    const user={
      email:this.form.get('email').value,
      password:this.form.get('password').value
    }
    this.authService.Login(user).subscribe(data=>{
      console.log(data);
      if(data.code!=0){
        this.messageClass="alery alert-danger";
        this.message=data.message;
        this.processing=false;
        this.enableForm();
      }else{

        this.messageClass="alery alert-success";
        this.message=data.message;
        this.authService.storeUserData(data.data.token,data.user)
        setTimeout(()=>{
          this.router.navigate(['/dashboard'])
        },1000)
      }
    })
  }

}

