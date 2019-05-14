import { Component, OnInit } from '@angular/core';
import {
  FormBuilder, FormGroup, AbstractControl, Validators, FormControl
} from '@angular/forms'
import { HttpClient } from '@angular/common/http';

function phoneValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match(/^131\+d/)) {
    return { invalidPhonenumber: true };
  }
}
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {


  loginForm: FormGroup;
  username: AbstractControl;
  password: AbstractControl;
  loginFailed: boolean;
  auth: any;


  constructor(fb: FormBuilder, private httpclient: HttpClient) {      //注入
    this.loginForm = fb.group({
      'username': ['root', Validators.required],
      'password': ['123456', Validators.required],

    })
    this.username = this.loginForm.controls['username'];
    this.password = this.loginForm.controls['password'];

  }

  ngOnInit() {

  }

  onSubmit(value: string): void {
    console.log(value);
    this.auth.login(value);

    /* this.httpclient.get('http://127.0.0.1:8082/login').subscribe(
     (resp: any) => {
       console.log(resp);
       let u = resp[0];
       let o = value;
       if (u.username == o['username']&& u.password == o['password']) {
         alert('登录成功!');
       }else{
         alert('登录失败!')
         this.txt = "登录失败";
       }
     }
   );
   this.httpclient.post('http://127.0.0.1:8082/login',JSON.stringify(value)).subscribe(
  (resp:any) =>{
    console.log(resp);
    if(resp.success){
     alert('登录成功!');
   }else{
     alert('登录失败!');
    }
 
  }
   );
   }
 }   ;*/
  }
}