import { ADMINLOCAL } from './adminLocal';
import { AdminDetailsService } from './../../service/admin-details.service';
import { LoginDetailsService } from './../../service/login-details.service';
import { HttpClient } from '@angular/common/http';
import { UserDetailsService } from './../../service/user-details.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Local } from './local';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
 

  visible: boolean = true;
  changetype: boolean = true;

  @Output()
  childMessage = new EventEmitter();
  emails: any;
  passwords: any;
  static loginForm: any;

  //@ts-check

  viewpass() {
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }
  onsubmit() {
    console.log('on submit');
    this.childMessage.emit(this.store());
  }

  user: any;
  // adminlocalInterface : any[]=[];
  type: string = 'password';
  loginForm!: FormGroup;

  ngOnInit() {
    this.loginForm = this.fb.group({
      password: ['', Validators.required],
      email: ['', Validators.required],
    });
  }
  password: any;
  email: any;

  localInterface: Local | null = null;
  
  
  constructor(
    private login: LoginDetailsService,
    private userdata: UserDetailsService,
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private adminData: AdminDetailsService
  ) {}

  //doubt login values =addNewContactUser
  addNewContact() {
    const newFormData = {
      password: this.password,
      email: this.email,
    };
    console.log(newFormData);
    this.login.login(newFormData).subscribe((resultData: any) => {
     console.log(resultData);
      if(resultData){
        this.localInterface = resultData;
        console.log(
        this.localInterface?.accessToken,
        this.localInterface?.refreshToken
      );
      this.saveData();
      this.router.navigate(['main-page']);
      }
      else{
        console.log(newFormData);
        this.adminlogin();
      }
    });
   
  }
  adminlogin() {
    const newFormData = {
      password: this.password,
      email: this.email,
    };
    console.log(newFormData);
    this.adminData.adminlogin(newFormData).subscribe((data:any) => {
      console.log(data);
      if(data!==null){
        this.router.navigate(['get-product']);
      }
      });
    };
  
// addNewContacts() {
//   const newFormData = {
//     password: this.password,
//     email: this.email,
//   };

//   console.log(newFormData);

//   this.login.login(newFormData).subscribe(
//     (resultData: any) => {
//       console.log(resultData);

//       if (resultData) {
//         this.localInterface = resultData;
//         console.log(
//           this.localInterface?.accessToken,
//           this.localInterface?.refreshToken
//         );

//         this.saveData();

//         if (this.localInterface!==null) {
//           this.router.navigate(['get-product']);
//         } else {
//           this.router.navigate(['main-page']);
//         }

//       } else {
//         console.log(newFormData);
//         console.log('Login failed');
//       }
//     },
//     (error: any) => {
//       console.error('Error in addNewContact():', error);
//     }
//   );
// }

     

  store() {
    this.router.navigate(['register-form']);
  }

  saveData() {
    console.log('localstorage');
    const accessToken = this.localInterface?.accessToken;

    localStorage.setItem('UsertToken', JSON.stringify(accessToken));
  }
}
