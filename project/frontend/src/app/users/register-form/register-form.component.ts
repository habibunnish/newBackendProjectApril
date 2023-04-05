import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
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
// profileForm:any;

// profileForm = this.fb.group({
//   firstName: ['', Validators.required],
//   lastName: [''],
//   address: this.fb.group({
//     street: [''],
//     city: [''],
//     state: [''],
//     zip: ['',Validators.pattern('[0-9]{6}')],
//     email: ['',Validators.required],
//     password:['',Validators.required]
    
//   }),
// });
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
    private router: Router
  ) {}
  
  //post
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
}
