import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup ,Validators} from '@angular/forms';
import {AuthService} from '../../service/auth.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userForm:FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService:AuthService
  ) {
    this.createForm();
  }

  ngOnInit() {
  }
  createForm() {
    this.userForm = this.fb.group({
      username: ['', Validators.required ], // <--- the FormControl called "username"
      email:['', Validators.required ],
    });
  }
  onSubmit(){
    console.log("aaaaaaaaaaaaaaaaaaa")
    const user={}
    this.authService.Register(user).subscribe(data=>{
      console.log(data)
    })
    console.log(this.userForm.get("username").value)
  }
}
