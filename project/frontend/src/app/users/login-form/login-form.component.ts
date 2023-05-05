import { adminLocal} from './adminLocal';
import { AdminDetailsService } from './../../service/admin-details.service';
import { LoginDetailsService } from './../../service/login-details.service';
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
  changeType: boolean = true;

  @Output()
  childMessage = new EventEmitter();
  emails: any;
  passwords: any;
  static loginForm: any;
  // adminForm!: FormGroup;

  //@ts-check

  viewPass() {
    this.visible = !this.visible;
    this.changeType = !this.changeType;
  }
  onSubmit() {
    console.log('on submit');
    this.childMessage.emit(this.store());
  }

  user: any;
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
  adminlocalInterface: adminLocal | null = null;
  
  constructor(
    private login: LoginDetailsService,
    private fb: FormBuilder,
    private router: Router,
    private adminData: AdminDetailsService
  ) {}

  addNewContact() {
    const newFormData = {
      password: this.password,
      email: this.email,
    };
    console.log(newFormData);
    this.login.login(newFormData).subscribe((resultData: any) => {
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
        this.adminLogin();
      }
    });
   
  }
  adminLogin() {
    const newFormData = {
      password: this.password,
      email: this.email,
    };
    console.log(newFormData);
    this.adminData.adminLogin(newFormData).subscribe((data:any) => {
      if(data!=null){
        this.adminlocalInterface=data;
        console.log(
          this.adminlocalInterface?.accessToken,
          this.adminlocalInterface?.refreshToken
        )
        this. admniData()
        this.router.navigate(['get-product'])
        }
      });
    };
  
  store() {
    this.router.navigate(['register-form']);
  }

  saveData() {
    console.log('localstorage');
    const accessToken = this.localInterface?.accessToken;

    localStorage.setItem('UsertToken', JSON.stringify(accessToken));
  }

  admniData(){
    console.log("admin localstorage");
    const accessToken=this.adminlocalInterface?.accessToken;
    localStorage.setItem('adminToken',JSON.stringify(accessToken))
  }
}
