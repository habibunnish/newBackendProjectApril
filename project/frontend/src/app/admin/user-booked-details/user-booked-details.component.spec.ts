import { RouterTestingModule } from '@angular/router/testing';
import { UserBookedDetailsComponent } from './user-booked-details.component';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';


describe('UserBookedDetailsComponent ', () => {
  let component:UserBookedDetailsComponent ;
  let fixture: ComponentFixture<UserBookedDetailsComponent>;
  let router:Router;

  beforeEach(async() => {
  await TestBed.configureTestingModule({
      declarations: [UserBookedDetailsComponent],
      imports:[HttpClientTestingModule,RouterTestingModule],
      providers:[HttpClient,HttpHandler,],
      schemas:[NO_ERRORS_SCHEMA]
     
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBookedDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it("should create",()=>{
    const fixture=TestBed.createComponent(UserBookedDetailsComponent);
    const Component=fixture.componentInstance;
    expect(Component).toBeTruthy()
  })
  
});