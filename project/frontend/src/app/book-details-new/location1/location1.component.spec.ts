import { CartService } from 'src/app/services/guards/cart.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AdminService } from './../../services/guards/admin.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Location1Component } from './location1.component';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { ActivatedRoute, convertToParamMap } from '@angular/router';

class ActivatedRouteStub{
  paramMap=of(convertToParamMap({}))
}


describe('Location1Component ', () => {
  let component: Location1Component ;
  let fixture: ComponentFixture<Location1Component >;
  let adminService:AdminService;
 let activatedRoute:ActivatedRoute;
 let adminServices:jasmine.SpyObj<AdminService>;
 let httptestingController:HttpTestingController;
    let cartService:CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule,HttpClientTestingModule],
      declarations: [Location1Component],
      providers:[HttpClient,HttpHandler,AdminService,CartService,{provide:ActivatedRoute,useClass:ActivatedRouteStub},],
      schemas:[NO_ERRORS_SCHEMA]
     
    })
    .compileComponents()
  });
  beforeEach(async()=>{
    fixture = TestBed.createComponent(Location1Component);
    component = fixture.componentInstance;
    adminService=TestBed.inject(AdminService);
    // activatedRoute=TestBed.inject(ActivatedRoute);
    cartService=TestBed.inject(CartService);
    httptestingController=TestBed.inject(HttpTestingController);

   
  });
  // it('should set state and call no duplicatiiion oninit',()=>{
  //   const state='Chennai';
  //   const activatedRouteStub={snapshot:{params:{state:state}}};
  //   const noDuplicationSpy=spyOn(component,'noDuplication');
  //   TestBed.overrideProvider(activatedRoute,{useValue:activatedRouteStub});
  //   fixture.detectChanges();
  //   expect(component.state).toEqual(state);
  //   expect(noDuplicationSpy).toHaveBeenCalled();
  // })

  it('should filter',()=>{
    const mockBokkinhlist=[
      { 
      id: 39,
      body:'place',
      location: "Chennai"
      }
  ]
  spyOn(adminService, 'getProduct').and.returnValue(of(mockBokkinhlist));
  component.state='Chennai';
  component.noDuplication();
  expect(component.bookingList).toEqual(mockBokkinhlist);
 
});


  // it('should add item to cart in database',()=>{
  //   const item={id:1,name:'product 1',price:10};
  //   spyOn(console,'log');
  //   cartService.addingindatabse(item);
  //   const req=httptestingController.expectOne('http://localhost:3000/addcart');
  //   expect(req.request.method).toEqual('POST');
  //   expect(req.request.body).toEqual(item);
  //   req.flush({status:'success'});
  //   expect(console.log).toHaveBeenCalledWith({status:'success'});
  // });
 
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});