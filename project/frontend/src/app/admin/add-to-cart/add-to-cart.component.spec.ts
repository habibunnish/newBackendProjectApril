import { CartService } from './../../services/guards/cart.service';
import { By } from '@angular/platform-browser';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AddToCartComponent } from './add-to-cart.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { UserBookedHistoryService } from 'src/app/services/guards/user-booked-history.service';
import { Router } from '@angular/router';
import { of, Observable } from 'rxjs';

// class  mockcartservice{
//   getaddcartDetailsOfAllLocation():Observable<any>{
//     return of([
//       {id:1,location:'chennai'},
//       {id:2,location:'goa'},
//       {id:3,location:'banguluru'}
//     ])
//   }
 
// }


describe('AddToCartComponent ', () => {
  let component:AddToCartComponent  ;
  let fixture: ComponentFixture<AddToCartComponent>;
  let cartService:CartService;
  // let   mockCartService : jasmine.SpyObj<CartService>;
  let router:Router;
  let userbookedService:UserBookedHistoryService;
   let httptestingcontroller:HttpTestingController;

  beforeEach(() => {
    // mockCartService = jasmine.createSpyObj('CartService', ['deleteAllCartLocation']);
    
   TestBed.configureTestingModule({
      declarations: [AddToCartComponent  ],
      providers:[HttpClient,HttpHandler,UserBookedHistoryService,{provide:Router},{provide:CartService}],
      imports:[RouterTestingModule,HttpClientTestingModule]
     
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToCartComponent  );
    component = fixture.componentInstance;
    userbookedService=TestBed.inject(UserBookedHistoryService);
    httptestingcontroller=TestBed.inject(HttpTestingController);
    const mockitem={id:2,name:'test',email:'',quantity:1};
    localStorage.setItem('userData',JSON.stringify({email:'test@ex.com'}));
    router=TestBed.inject(Router);
    // cartService=TestBed.inject(CartService);
    fixture.detectChanges();

  });
  afterEach(()=>{
    httptestingcontroller.verify();
  });


  it(' should  gotobooking when its clicked',()=>{
    const fixture=TestBed.createComponent(AddToCartComponent);
    spyOn(component,'goback');

    fixture.detectChanges();
    const bookingbutton=fixture.debugElement.query(By.css('#goback'))
    bookingbutton.nativeElement.click();
    fixture.detectChanges();

    fixture.whenStable().then(()=>{
      expect(component.goback).toHaveBeenCalled();
    })
   });

//  it('should addproduct to cart for logged in user',()=>{
//   const item={id:1,name:'product1',price:10};
//   const email={email:'test@example.com'};
//   spyOn(localStorage,'getItem').and.returnValue(JSON.stringify(email));
//   spyOn(userbookedService,'UserBookedData').and.returnValue(of({status:'success'}));
//   spyOn(console,'log');
//   component.addProduct(item);
//   expect(localStorage.getItem).toHaveBeenCalledWith('userData');
//   expect(userbookedService.UserBookedData).toHaveBeenCalledWith({ ...item, email: email.email });
//   expect(console.log).toHaveBeenCalledWith({ status: 'success' });
//   expect(window.alert).toHaveBeenCalledWith('product added successfully');
//  });

 it('should call addproduct()and display alert message',()=>{
  const item={id:1,name:'product1',price:10};
  spyOn(component,'addProduct');
  spyOn(window,'alert');
  component.book(item);
  expect(component.addProduct).toHaveBeenCalledWith(item);
  expect(window.alert).toHaveBeenCalledWith('product ahs been booked successfully');

 });
// it('should get details of alllocation',()=>{
//   spyOn(cartService,'getaddcartDetailsOfAllLocation').and.callThrough();
//   fixture.detectChanges();
//   expect(component.items).toEqual( mockcartservice);
//   expect(cartService.getaddcartDetailsOfAllLocation).toHaveBeenCalled();
//   })


// it('should delete an item from the cart',()=>{
//   const mockdata={id:1};
//   mockCartService.deleteAllCartLocation.and.returnValue(of(null));
//   component.delete(mockdata);
//   expect(mockCartService.deleteAllCartLocation).toHaveBeenCalledWith(mockdata.id);
// });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});