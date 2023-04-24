import { BookedDetailsService } from './../../service/booked-details.service';
import { BookDetailsNewModule } from './../../book-details-new/book-details-new.module';
import { CartDetailsService } from './../../service/cart-details.service';
import { AddToCartComponent } from './add-to-cart.component';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';


describe('UserBookedDetailsComponent ', () => {
  let component:AddToCartComponent ;
  let fixture: ComponentFixture<AddToCartComponent>;
  let router:Router;
  let httptestingcontroller:HttpTestingController;
  let cart:CartDetailsService;
  let booked:BookedDetailsService;

  beforeEach(async() => {
  await  TestBed.configureTestingModule({
      declarations: [AddToCartComponent  ],
      providers:[HttpClient,HttpHandler,],
      imports:[RouterTestingModule,HttpClientTestingModule],
      schemas:[NO_ERRORS_SCHEMA], 
     
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToCartComponent);
    component = fixture.componentInstance;
    localStorage.setItem('userData',JSON.stringify({email:'test@ex.com'}));
    router=TestBed.inject(Router);
    httptestingcontroller=TestBed.inject(HttpTestingController);
    booked=TestBed.inject(BookedDetailsService);
    cart=TestBed.inject(CartDetailsService);
    fixture.detectChanges();
  });

  afterEach(()=>{
    httptestingcontroller.verify();
  });

  // it("should call",()=>{
  //   const item={id:1,name:'product1',price:10};
  //   spyOn(component,"addProduct");
  //   spyOn(window,'alert');
  //   component.book(item);
  //   expect(component.addProduct).toHaveBeenCalledWith(item);
  //   expect(window.alert).toHaveBeenCalledWith('product has been booked successfully')
  // })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});