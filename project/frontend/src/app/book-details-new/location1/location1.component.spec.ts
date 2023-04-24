import { Location1Component } from './location1.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';


describe('UserBookedDetailsComponent ', () => {
  let component:Location1Component;
  let fixture: ComponentFixture<Location1Component>;
  let httptestingController:HttpTestingController;
  let activatedRoute:ActivatedRoute;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule,HttpClientTestingModule],
      declarations: [Location1Component],
      providers:[HttpClient,HttpHandler,{provide:ActivatedRoute,useClass:activatedRoute},],
      schemas:[NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Location1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});