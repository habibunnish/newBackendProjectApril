import { AdminDetailsService } from './../../service/admin-details.service';
import { LoginDetailsService } from './../../service/login-details.service';
import { HttpClient } from '@angular/common/http';
import { UserDetailsService } from './../../service/user-details.service';
import { Component,EventEmitter,OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Local } from './local';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
 
  visible:boolean=true;
  changetype:boolean=true;

  @Output()
  childMessage=new EventEmitter()
  emails: any;
  passwords: any;
  static loginForm: any;
 
 //@ts-check

 viewpass(){
this.visible=!this.visible;
this.changetype=!this.changetype;
 }
  onsubmit() {
    console.log('on submit');
   this.childMessage.emit( this.store());
  }
  
  user:any;
  admins: any;
  type: string = 'password';
  loginForm!: FormGroup;


  ngOnInit() {
    this.loginForm = this.fb.group({
      password: ['', Validators.required],
      email: ['', Validators.required],
    });
  };
  password: any;
  email: any;

  localInterface:Local|null=null;
 
  constructor(
    private login:LoginDetailsService,
    private userdata: UserDetailsService,
    private fb: FormBuilder,
    private router: Router,
    private http:HttpClient,
    private adminData:AdminDetailsService
  ) {}

  //doubt login values =addNewContactUser
  addNewContact() {
    const newFormData = {
      password: this.password,
      email: this.email,
    };
   this.login.login(newFormData).subscribe((resultData:any)=>{
    console.log(resultData);
    this.localInterface=resultData;
    console.log(this.localInterface?.accessToken,this.localInterface?.refreshToken)
    
    this.adminlogin();
    this.saveData();
    this.router.navigate(['main-page']);
    
      })
  };

  

  submit() {
    this.userdata.userRegisterDetails().subscribe((res:any)=>{
      console.log(res);
      this.user=res;
    
      for (let users of this.user) {
        console.log('users')
        if (users.email == this.loginForm.value.email) {
          this.saveData();
          console.log('savedata')
          this.router.navigate(['home-page']);
        }
      }  ;
      
    });
      this.adminlogin();
     
  };
  adminlogin(){
    // const newFormData = {
    //   password: this.password,
    //   email: this.email,
    // };
    this.adminData.adminregister(this.loginForm).subscribe((data)=>{
      console.log(data);
      this.admins=data;
      for(let admindetails of this.admins){
        if(admindetails.email==this.email && admindetails.password==this.password){
         this.router.navigate(['get-product']);
        
        }
      }
    });
   };

  store(){
    this.router.navigate(['register-form'])
  };

  saveData() {
    console.log('localstorage');
    const accessToken=this.localInterface?.accessToken
    
    localStorage.setItem('UsertToken', JSON.stringify(accessToken));
   
  };

}



