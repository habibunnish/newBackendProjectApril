import { Router } from '@angular/router';
import { GetProductComponent } from './get-product.component';
import { ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { AdminService } from 'src/app/services/guards/admin.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, throwError } from 'rxjs';
import { By } from '@angular/platform-browser';


describe('GetProductComponent ', () => {
  let component:GetProductComponent   ;
  let fixture: ComponentFixture<GetProductComponent   >;
  let adminService:jasmine.SpyObj<AdminService>;
  let productList:any[];
  let router:Router;
  let fakeid:any;


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetProductComponent],
      imports:[HttpClientTestingModule],
      providers:[HttpClient,HttpHandler,AdminService,{provide:Router}],
     
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetProductComponent   );
    component = fixture.componentInstance;
    let fakeid=213;
    router=jasmine.createSpyObj('Router',['navigate']);
    fixture.detectChanges();
  });

  beforeEach(()=>{
    adminService=jasmine.createSpyObj('AdminService',['getProduct']);
    productList=[{
      id: 1,
      tittle: "HOTEL PERAL",
      area: "MUGHALPUR",
      price: "1400",
      image: "chennai7.jpg",
      location: "Chennai"
    }];
    component=new GetProductComponent(adminService,router);

  })
  // it('should det productlist when getproduct()',()=>{
  //   adminService.getProduct.and.returnValue(of(productList));
  //   component.getallproduct();
  //   expect(adminService.getProduct).toHaveBeenCalled();
  //   expect(component.ProductList).toEqual(productList);
  // })

// it('should set productlist to the response of adminservice.getproduct',()=>{
//   const ProductList=[
//     { id: 1, name: 'product 1', price: 10 },
//     { id: 2, name: 'product 2', price: 20 },
//     { id: 3, name: 'product 3', price: 30 }
//   ];
//   spyOn(adminService,'getProduct').and.returnValue(of(productList));
//   component.getallproduct();
//   tick();
//   expect(adminService.getProduct).toHaveBeenCalled();
//     expect(component.ProductList).toEqual(productList);
// })

  
 it('should handele error id return error',()=>{
  adminService.getProduct.and.returnValue(throwError('Error'));
  component.getallproduct();
  expect(adminService.getProduct).toHaveBeenCalled();
    expect(component.ProductList).toEqual([]);
 
 });
 
// it('should navigate to crct url when id called',()=>{
//   component.edit(fakeid);
//   const url=`add-new-data/${fakeid}`
//   expect(router.navigate).toHaveBeenCalledWith([url]);
// });

// it('should navigate to how-it-work  route',()=>{
//   spyOn(router,'navigate').and.stub();
//   component.logout();
//   expect(router.navigate).toHaveBeenCalledWith(['how-it-work']);
// });

// it(' should  logout when its clicked',()=>{
//   const fixture=TestBed.createComponent(GetProductComponent);
//   spyOn(component,'logout');

//   fixture.detectChanges();
//   const bookingbutton=fixture.debugElement.query(By.css('#logout'))
//   bookingbutton.nativeElement.click();
//   fixture.detectChanges();

//   fixture.whenStable().then(()=>{
//     expect(component.logout).toHaveBeenCalled();
//   })
//  });


//  it('should navigate to user-booked-details route', () => {
//   const router=TestBed.inject(Router);
//   const routerSpy = spyOn(router, 'navigate');
//   component.userbooked();
//   expect(routerSpy).toHaveBeenCalledWith(['user-booked-details']);
// });

  it('should create', () => {
    expect(component).toBeTruthy();
   });

});