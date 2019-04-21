import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { LocalStorageService } from 'src/app/Services/localStorageService';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailRegex1=new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$');
  mobileRegex1= new RegExp('^[1-9]\d{10}$');

  valDisplay: boolean=false;
  formGroup: FormGroup=new FormGroup({
    'username':new FormControl(null,[this.usernameValid.bind(this)]),
    'password':new FormControl(null)
  });

  constructor(private localSerivce: LocalStorageService,
              private router: Router ) { }  

  ngOnInit() {
   // this.find();
  }

  onSubmit() {
    this.localSerivce.setValue(this.formGroup.value.username);
    this.router.navigate(['home']);
  }
  
  
  usernameValid(username: FormControl):{[s:string]:boolean}
  {
    if((username.value == '')  ||!(this.emailRegex1.test(username.value))
    ||!(this.mobileRegex1.test(username.value)))
    {console.log("INvalid user ");  
    this.valDisplay=true;
    return {'ENter valid Username':false};
  }
  else
  console.log("valid abhi");
    

  }
  
}
