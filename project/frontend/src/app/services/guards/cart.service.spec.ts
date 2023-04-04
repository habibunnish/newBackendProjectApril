import { CartService } from 'src/app/services/guards/cart.service';
import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { of, BehaviorSubject } from 'rxjs';



describe(' CartService ', () => {
  let services:  CartService ;
  let httpsTestingController:HttpTestingController;
  let cartService:CartService;
  let httpClientSpy:jasmine.SpyObj<HttpClient>;
  let CARTDATA:any=[
    {
        id: 38,
        tittle: "Radha hometel sarovar hotel",
        area: "tamabaram road",
        price: "3600",
        image: "chennai2.jpg",
        email: "habi@123",
        location: "Chennai"
    }
  ];
 
  // beforeEach(() => {
  //   let httpClientSpyObj=jasmine.createSpyObj('HttpClient',['get']);
  //   TestBed.configureTestingModule({
  //     imports:[HttpClientTestingModule],
  //      providers:[{provide:HttpClient,useValue:httpClientSpyObj},HttpHandler],
      
  //   });
  //   httpsTestingController=TestBed.inject(HttpTestingController);
  //   cartService=TestBed.inject(CartService);
  //   httpClientSpy=TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
   

  // });
  // it('should add a product to the cart',()=>{
  //   const mockProduct={
  //     id: 38,
  //       tittle: "Radha hometel sarovar hotel",
  //       price: "3600",
  //       image: "chennai2.jpg",
  //       location: "Chennai"
  //   };
  //   const expectedCartItemList=[mockProduct];
  //   cartService.addtoCarts(mockProduct);
  //   cartService.cartItemList=[];
   
  //   expect(services.cartItemList).toEqual(expectedCartItemList);
  //   cartService.productList.subscribe((cartItemList)=>{
  //     expect(cartItemList).toEqual(expectedCartItemList);
  //   });
  //   });

//   it('#post #postaddcartDetailsOfAllLocation() ',(done:DoneFn)=>{
//     // httpClientSpy.post;
//     cartService.postaddcartDetailsOfAllLocation(CARTDATA).subscribe({
//         next:(posts)=>{
//             expect(posts).toEqual(CARTDATA);
//             done();
//         },
//         error:()=>{
//             done.fail
//         },
//     });
//     const req=httpsTestingController.expectOne('http://localhost:3000/');
//         expect(req.request.method).toEqual('POST');
//         expect(req.request.body).toEqual(CARTDATA);
//     expect(httpClientSpy.post).toHaveBeenCalled();
// });

// it('# deleteAllCartLocation() should return expected value',(done:DoneFn)=>{
//   httpClientSpy.delete.and.returnValue(of(CARTDATA));
//   cartService.deleteAllCartLocation(CARTDATA).subscribe({
//       next:(posts)=>{
//           expect(posts).toEqual(CARTDATA);
//           done();
//       },
//       error:()=>{
//           done.fail
//       },
//   });
//   expect(httpClientSpy.delete).toHaveBeenCalledTimes(1);
// });




  it('should be created', () => {
    expect(services).toBeTruthy();
  });
});