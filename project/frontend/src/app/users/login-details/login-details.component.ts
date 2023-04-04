import { LoginDetailsService } from './../../service/login-details.service';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDetailsService } from 'src/app/service/user-details.service';
import { LoginService } from 'src/app/services/guards/login.service';

@Component({
  selector: 'app-login-details',
  templateUrl: './login-details.component.html',
  styleUrls: ['./login-details.component.scss']
})
export class LoginDetailsComponent implements OnInit{


  visible:boolean=true;
  changetype:boolean=true;

  emails: any;
  passwords: any;

  // loginForm: any;
  @Output()
  childMessage=new EventEmitter()


  viewpass() {
  this.visible=!this.visible;
  this.changetype=!this.changetype;
}
ngOnInit() {
  // this.loginForm = this.fb.group({
  //   password: ['', Validators.required],
  //   email: ['', Validators.required],
  // });
};
 loginForm = new FormGroup({
    password: new FormControl(),
    email:  new FormControl()
  });

constructor(
  private userdata: UserDetailsService,
  private fb: FormBuilder,
  private router: Router,
  private http:HttpClient,
  private login:LoginDetailsService
  
) {}
  email: string = '';
  password: string = '';
  // isLogin: boolean = true;
  // erroMessage: string = "";
   user:any;
   admins:any;
 
  

   onsubmit() {
    console.log('on submit');
   this.childMessage.emit( this.store());

  }
  store(){
    this.router.navigate(['register-form'])
  };
  
  login2(){
    let bodyData = {
      email: this.email,
      password: this.password,
    };
       this.userdata.userRegisterDetails().subscribe((res:any)=>{
          console.log(res);
          this.user=res;
          for(let USER of this.user)
          {
            console.log('users')
            if( USER.email == this.loginForm.value.email && USER.password== this.loginForm.value.password) {
              localStorage.setItem('userData',JSON.stringify(bodyData));
              this.router.navigate(['home-page']);
            }
            // else {
            //   console.log("not found user");
             
            // }
           };
         });
          this.login1()
    }
           
login1(){
    this.login.adminLoginDetailsGet().subscribe((res:any)=>{
      console.log(res);
      this.admins=res;
      for(let ADMIN of this.admins){
        console.log("admins");
        if(ADMIN.email===this.email && ADMIN.password===this.password ){
          this.router.navigate(['get-product']);
        }
        else{
          console.log("admins not found");
        }
       }

    })
  }
}

