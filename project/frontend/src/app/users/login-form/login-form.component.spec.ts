import { LoginFormComponent } from './login-form.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';

describe('UserBookedDetailsComponent ', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;
  let router:Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginFormComponent],
      providers: [HttpClient, HttpHandler,FormBuilder,],
      imports:[ReactiveFormsModule,RouterTestingModule, FormsModule],
      schemas:[NO_ERRORS_SCHEMA]
     
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router=TestBed.inject(Router);
  });


  

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
