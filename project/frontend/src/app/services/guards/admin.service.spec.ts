import { AdminService } from "src/app/services/guards/admin.service";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from "rxjs";


describe(' CartService ', () => {
    let service: AdminService;
    let httpsTestingController:HttpTestingController;
    let adminService:AdminService;
    let httpClientSpy:jasmine.SpyObj<HttpClient>;
    let PRODUCTSDETAILS:any=[
      {
        "id": 38,
        "tittle": "Radha hometel sarovar hotel",
        "area": "tamabaram road",
        "price": "3600",
        "image": "chennai2.jpg",
        "email": "",
        "location": "Chennai"
      }
    ];
    let id:1;
//    beforeEach(() => {
//       let httpClientSpyObj=jasmine.createSpyObj('HttpClient',['get']);
//       TestBed.configureTestingModule({
//           providers:[AdminService,{provide:HttpClient,useValue:httpClientSpyObj},HttpHandler],
//           imports:[HttpClientTestingModule]
  
//       });
//       httpsTestingController=TestBed.inject(HttpTestingController);
//      adminService=TestBed.inject(AdminService);
//       httpClientSpy=TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
//       service = TestBed.inject(AdminService);
//     });

    // it('#post #UserBookedData() ',(done:DoneFn)=>{
    //     // httpClientSpy.post;
    //     adminService.addProductDetails( PRODUCTSDETAILS).subscribe({
    //         next:(posts:any)=>{
    //             expect(posts).toEqual( PRODUCTSDETAILS);
    //             done();
    //         },
    //         error:()=>{
    //             done.fail
    //         },
    //     });
    //     const req=httpsTestingController.expectOne('http://localhost:3000/');
    //         expect(req.request.method).toEqual('POST');
    //         expect(req.request.body).toEqual( PRODUCTSDETAILS);
    //     expect(httpClientSpy.post).toHaveBeenCalled();
    // });
    
    //   it('# deleteproductchennai() should return expected value',(done:DoneFn)=>{
    //     adminService.deleteProduct(id).subscribe((data:any)=>{
    //         expect(data).toEqual(PRODUCTSDETAILS);
    //         done();
    //     });
    //     const req=httpsTestingController.expectOne({
    //         method:'DELETE'
    //     });
    //  });

    //  it('#put putproductchennai()',(done:DoneFn)=>{
    //     adminService.putproduct(id,PRODUCTSDETAILS).subscribe((data:any)=>{
    //         expect(data).toEqual(PRODUCTSDETAILS);
    //         done();
    //     });
    //     const req=httpsTestingController.expectOne({
    //         method:'PUT'
    //     });
    //  });
      
    it('should be created', () => {
        expect(service).toBeTruthy();
      });
    });