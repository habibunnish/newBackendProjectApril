import { AdminDetailsService } from './../../service/admin-details.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup,  FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDetailsService } from 'src/app/service/user-details.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent {

firstname: any;
lastname: any;
street: any;
city: any;
state: any;
zipcode: any;
email: any;
password: any;

  profileForm=new FormGroup({
    firstname:new FormControl(),
    lastname:new FormControl(),
     street: new FormControl(),
    city: new FormControl(),
    state:new FormControl(),
    zipcode: new FormControl(),
    email: new FormControl(),
    password:new FormControl(),
   
  })

  constructor(
    private fb: FormBuilder,
    private userData: UserDetailsService,
    private router: Router,
    private admin:AdminDetailsService
  ) {}
  
  submit() {
    const registerFormData = {
      firstname: this.firstname,
      lastname: this.lastname,
      street: this.street,
      city: this.city,
      state: this.state,
      zipcode: this.zipcode,
      email: this.email,
      password:this.password
    };
    console.log('hi');
     this.userData.register(registerFormData) .subscribe((data) => {
        console.log(data);
        alert(
          'you have successfully registered 🏨️🛌️'
        );
        this.router.navigate(['login-form']);
        this.profileForm.reset();
      });
     
  }

  adminRegisterData(){
    const adminDatas={
      email: this.email,
      password:this.password
    }
    console.log("admin register");
    this.admin.adminRegisterDetail(adminDatas).subscribe((data)=>{
      console.log(data);
      this.router.navigate(['login-form']);
    })

  }

}
