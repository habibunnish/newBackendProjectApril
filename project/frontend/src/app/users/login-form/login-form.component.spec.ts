import { LoginService } from './../../services/guards/login.service';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginFormComponent } from './login-form.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { of } from 'rxjs';

class RouterStub{
  navigate(url:any[]){
    return url;
  }
}

describe('LoginFormComponent ', () => {
  let fixture: ComponentFixture<LoginFormComponent >;
  let component:LoginFormComponent;
  let mockPostService:any;
  let loginService:LoginService;
  let router:Router;
 


  beforeEach(async() => {
    
    await TestBed.configureTestingModule({
      imports:[ReactiveFormsModule,RouterTestingModule, FormsModule],
      declarations: [ LoginFormComponent ],
      providers:[HttpClient,HttpHandler,LoginService,FormBuilder,{provide:Router,useClass:RouterStub}],
     
    })
    .compileComponents();
    fixture = TestBed.createComponent(LoginFormComponent);
    component=fixture.componentInstance;
    loginService=TestBed.inject(LoginService);
    router=TestBed.inject(Router);
   
    const POSTS=[
      {
        id:1,
        body:'body 1',
        tittle:'title 1',
      }
    ];
    mockPostService=jasmine.createSpyObj(['addNewContact','adminlogin'])
   
  });

  beforeEach(()=>{
    component.users=[{email:'dsfghjk@1234',password:'password1'},{email: 'user2@example.com', password: 'password2'}];
    component.loginForm=new FormGroup({
      email:new FormControl('')
    });
  });

  
  it('should save data and navigate to homepage when email is found in users',()=>{
    const email='dsfghjk@1234';
    component.loginForm.controls['email'].setValue(email);
    spyOn(component,'saveData').and.callFake(()=>{});
    // spyOn(component.Router,'navigate')
  })

 
 
  // it('should send a post request to the server',()=>{
  //   const newFormData={
  //     emails:'user@123',
  //     passwords:'user%45678'
  //   };
  //   spyOn(loginService,'addNewContactUser').and.returnValue(of(newFormData));
  //   component.password=newFormData.passwords;
  //   component.email=newFormData.emails;
  //   component.addNewContact();
  //   expect(loginService.addNewContactUser);
   
  // });



  it('should  emit onsubmit when its clicked',()=>{
    const onsubmit=spyOn(component.childMessage,'emit');
    fixture.nativeElement.querySelector('#buttononsubmit').click();
    expect(onsubmit).toHaveBeenCalled();
  });



  it('should navigate to get-product when admin credential are valid',()=>{
    const mockAdmin={
      email:'admini#23456',
      password:'admin@1223'
    };
    const mockadminResponse=[mockAdmin];
    spyOn(loginService,'adminLoginDetailsGet').and.returnValue(of(mockadminResponse));
    spyOn(router,'navigate');
    component.email='admini#23456';
    component.password='admin@1223';
    component.adminlogin();
    expect(router.navigate).toHaveBeenCalledWith(['get-product']);

  });
  it('should not navigate to get-product if its wrong details',()=>{
    const mockAdmin={
      email:'admini#23456',
      password:'admin@1223'
    };
    const mockadminResponse=[mockAdmin];
    spyOn(loginService,'adminLoginDetailsGet').and.returnValue(of(mockadminResponse));
    spyOn(router,'navigate');
    component.email='admini#23456';
    component.password='invalidpassword';
    component.adminlogin();
    expect(router.navigate).toHaveBeenCalledWith(['get-product']);

  });

  it('should save user data to local storage',()=>{
    const mockUser={
      email:'user@123',
      password:'user%45678'
    };
    component.email=mockUser.email;
    component.password=mockUser.password;
    component.saveData();
    expect(localStorage.getItem('userData')).toEqual(JSON.stringify(mockUser));
  })


  it('username and password is in required state', () => {
    fixture.detectChanges();
    fixture.whenStable().then(()=>{
        const password:HTMLInputElement=fixture.debugElement.nativeElement.querySelector('#password');
        password.value='abcdef';
        password.dispatchEvent(new Event('input'));

        const email:HTMLInputElement=fixture.debugElement.nativeElement.querySelector('#email');
        email.value='abcdef';
        email.dispatchEvent(new Event('input'));

        fixture.detectChanges();
        fixture.whenStable().then(()=>{
            expect(component.loginForm.valid).toBeFalsy()
         })
      })
  });


  
  it('should create', () => {
    expect(component).toBeTruthy();
  });


});