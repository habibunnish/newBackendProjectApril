import { UserBookedHistoryService } from 'src/app/services/guards/user-booked-history.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';


describe(' CartService ', () => {
  let service:  UserBookedHistoryService;
  let httpsTestingController:HttpTestingController;
  let userBookedHistoryService:UserBookedHistoryService;
  let httpClientSpy:jasmine.SpyObj<HttpClient>;
  let BOOKEDETAIL:any=[
    {
        "id": 38,
        "tittle": "Radha hometel sarovar hotel",
        "area": "tamabaram road",
        "price": "3600",
        "image": "chennai2.jpg",
        "email": "habicute111@gmail.com",
        "location": "Chennai"
    }
  ];
 
//  beforeEach(() => {
//     let httpClientSpyObj=jasmine.createSpyObj('HttpClient',['get']);
//     TestBed.configureTestingModule({
//         providers:[UserBookedHistoryService,{provide:HttpClient,useValue:httpClientSpyObj},HttpHandler],
//         imports:[HttpClientTestingModule]

//     });
//     httpsTestingController=TestBed.inject(HttpTestingController);
//     userBookedHistoryService=TestBed.inject(UserBookedHistoryService);
//     httpClientSpy=TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
//     service = TestBed.inject( UserBookedHistoryService);
//   });

//   it('#getUseBookeddata()',(done:DoneFn)=>{
//     httpClientSpy.get.and.returnValue(of(BOOKEDETAIL));
//     userBookedHistoryService.getUseBookeddata().subscribe({
//         next:(posts)=>{
//             expect(posts).toEqual(BOOKEDETAIL);
//             done();
//         },
//         error:()=>{
//             done.fail
//         },
//     });
//     expect(httpClientSpy.get).toHaveBeenCalled();
// });

// it('#get CART()',(done:DoneFn)=>{
//     httpClientSpy.get.and.returnValue(of(BOOKEDETAIL));
//     userBookedHistoryService.cart(BOOKEDETAIL).subscribe({
//         next:(posts)=>{
//             expect(posts).toEqual(BOOKEDETAIL);
//             done();
//         },
//         error:()=>{
//             done.fail
//         },
//     });
//     expect(httpClientSpy.get).toHaveBeenCalled();
// });

// it('#post #UserBookedData() ',(done:DoneFn)=>{
//     httpClientSpy.post;
//     userBookedHistoryService.UserBookedData(BOOKEDETAIL).subscribe({
//         next:(posts:any)=>{
//             expect(posts).toEqual(BOOKEDETAIL);
//             done();
//         },
//         error:()=>{
//             done.fail
//         },
//     });
//     const req=httpsTestingController.expectOne('http://localhost:3000/');
//         expect(req.request.method).toEqual('POST');
//         expect(req.request.body).toEqual(BOOKEDETAIL);
//     expect(httpClientSpy.post).toHaveBeenCalled();
// });




  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});