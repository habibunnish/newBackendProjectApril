import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';

import{LoginService} from 'src/app/services/guards/login.service'
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';


describe(' CartService ', () => {
  let service:  LoginService ;
  let httpsTestingController:HttpTestingController;
  let loginService:LoginService;
  let httpClientSpy:jasmine.SpyObj<HttpClient>;
  let USERDETAILS=[
    {
        "email": "habi@123",
        "password": "Habi@1234"
    }
  ];
  let REGISTERETAILS=[
    {
        "firstname": "habibunnisha",
        "lastname": "A",
        "street": "plot no 89/66 periyar nagar thiruvottriyur chennai-19",
        "city": "chennai",
        "state": "tamilnadu",
        "zipcode": "600019",
        "email": "habicute111@gmail.com",
        "id": 9
    }
  ];
  let ADMINDETAILS=[
    {
        "password": "Admin@123",
        "email": "Admin@123"
    }
  ];
//  beforeEach(() => {
//     let httpClientSpyObj=jasmine.createSpyObj('HttpClient',['get']);
//     TestBed.configureTestingModule({
//         providers:[LoginService,{provide:HttpClient,useValue:httpClientSpyObj},HttpHandler],
//         imports:[HttpClientTestingModule]

//     });
//     httpsTestingController=TestBed.inject(HttpTestingController);
//     loginService=TestBed.inject(LoginService);
//     httpClientSpy=TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
//     service = TestBed.inject( LoginService );
//   });

//   it('#  get GETUSERLOGIN() should return expected value',(done:DoneFn)=>{
//     httpClientSpy.get.and.returnValue(of(USERDETAILS));
//     loginService.getUserLogin().subscribe({
//         next:(posts: any)=>{
//             expect(posts).toEqual(USERDETAILS);
//             done();
//         },
//         error:()=>{
//             done.fail
//         },
//     });
//     expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
// });
// it('# get userRegisterDetails() should return expected value',(done:DoneFn)=>{
//     httpClientSpy.get.and.returnValue(of(REGISTERETAILS));
//     loginService.userRegisterDetails().subscribe({
//         next:(posts: any)=>{
//             expect(posts).toEqual(REGISTERETAILS);
//             done();
//         },
//         error:()=>{
//             done.fail
//         },
//     });
//     expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
// });
// it('# get adminLoginDetailsGet() should return expected value',(done:DoneFn)=>{
//     httpClientSpy.get.and.returnValue(of(ADMINDETAILS));
//     loginService.adminLoginDetailsGet().subscribe({
//         next:(posts: any)=>{
//             expect(posts).toEqual(ADMINDETAILS);
//             done();
//         },
//         error:()=>{
//             done.fail
//         },
//     });
//     expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
// });


// it('#post #addProductsDetailsjammu() ',(done:DoneFn)=>{
//     httpClientSpy.post;
//     loginService.addNewContactUser(USERDETAILS).subscribe({
//         next:(posts)=>{
//             expect(posts).toEqual(USERDETAILS);
//             done();
//         },
//         error:()=>{
//             done.fail
//         },
//     });
//     const req=httpsTestingController.expectOne('http://localhost:3000/');
//         expect(req.request.method).toEqual('POST');
//         expect(req.request.body).toEqual(USERDETAILS);
//     expect(httpClientSpy.post).toHaveBeenCalled();
// });

// it('#post #addProductsDetailsjammu() ',(done:DoneFn)=>{
//     httpClientSpy.post;
//     loginService.addNewUserRegisterDetails(REGISTERETAILS).subscribe({
//         next:(posts)=>{
//             expect(posts).toEqual(REGISTERETAILS);
//             done();
//         },
//         error:()=>{
//             done.fail
//         },
//     });
//     const req=httpsTestingController.expectOne('http://localhost:3000/');
//         expect(req.request.method).toEqual('POST');
//         expect(req.request.body).toEqual(REGISTERETAILS);
//     expect(httpClientSpy.post).toHaveBeenCalled();
// });

// it('#post #addProductsDetailsjammu() ',(done:DoneFn)=>{
//     httpClientSpy.post;
//     loginService.adminLoginDetailsPost(ADMINDETAILS).subscribe({
//         next:(posts)=>{
//             expect(posts).toEqual(ADMINDETAILS);
//             done();
//         },
//         error:()=>{
//             done.fail
//         },
//     });
//     const req=httpsTestingController.expectOne('http://localhost:3000/');
//         expect(req.request.method).toEqual('POST');
//         expect(req.request.body).toEqual(ADMINDETAILS);
//     expect(httpClientSpy.post).toHaveBeenCalled();
// });



it('should be created', () => {
    expect(service).toBeTruthy();
  });
});