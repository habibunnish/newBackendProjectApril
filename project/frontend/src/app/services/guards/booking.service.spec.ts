import { HttpClient, HttpHandler } from "@angular/common/http";
import{HttpTestingController, HttpClientTestingModule} from '@angular/common/http/testing';
import { TestBed } from "@angular/core/testing";
import { BookingService } from "src/app/services/guards/booking.service";
import{ map, of} from 'rxjs';


describe('service: bookingService',()=>{
    let service: BookingService ;   
    let httpTestingController:HttpTestingController;
    let httpClientSpy:jasmine.SpyObj<HttpClient>;
    let bookingService:BookingService;
     let POSTS:any=[
        {
            id: 1,
            tittle: "manohar oyo hotel",
            area: "kaswadi street",
            price: "3807",
            image: "bang3.jpg",
            email: "habi@123",
            location: "Banguluru"
          }
          
    ];
  
    // beforeEach(()=>{
       
    //     let httpClientSpyObj=jasmine.createSpyObj('HttpClient',['get']);
    //     TestBed.configureTestingModule({
    //         providers:[BookingService,{provide:HttpClient,useValue:httpClientSpyObj},HttpHandler],
    //         imports:[HttpClientTestingModule],
           
            
    //     });
      
    //     httpTestingController=TestBed.inject(HttpTestingController);
    //     bookingService=TestBed.inject(BookingService);
    //     httpClientSpy=TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
    //     service = TestBed.inject( BookingService );
    // });
    // afterEach(()=>{
    //     httpTestingController.verify();
    // })
   
    // it('# GET PRODUCT() should return expected value',(done:DoneFn)=>{
    //         httpClientSpy.get.and.returnValue(of(POSTS));
    //         bookingService.getProducts().subscribe({
    //             next:(posts)=>{
    //                 expect(posts).toEqual(POSTS);
    //                 done();
    //             },
    //             error:()=>{
    //                 done.fail
    //             },
    //         });
    //         expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
    //     });

        // it('#getproductbangaluru',(done:DoneFn)=>{
        //     httpClientSpy.get.and.returnValue(of(POSTS));
        //     bookingService.getProductbangluru().subscribe({
        //         next:(posts)=>{
        //             expect(posts).toEqual(POSTS);
        //             done();
        //         },
        //         error:()=>{
        //             done.fail
        //         },
        //     });
        //     expect(httpClientSpy.get).toHaveBeenCalled();
        // });

        // it('#getProductroyapuram()',(done:DoneFn)=>{
        //     httpClientSpy.get.and.returnValue(of(POSTS));
        //     bookingService.getProductroyapuram().subscribe({
        //         next:(posts)=>{
        //             expect(posts).toEqual(POSTS);
        //             done();
        //         },
        //         error:()=>{
        //             done.fail
        //         },
        //     });
        //     expect(httpClientSpy.get).toHaveBeenCalled();
        // });

        // it('#getProductjammu()',(done:DoneFn)=>{
        //     httpClientSpy.get.and.returnValue(of(POSTS));
        //     bookingService.getProductjammu().subscribe({
        //         next:(posts)=>{
        //             expect(posts).toEqual(POSTS);
        //             done();
        //         },
        //         error:()=>{
        //             done.fail
        //         },
        //     });
        //     expect(httpClientSpy.get).toHaveBeenCalled();
        // });
    
    
      

        // it('#post #addproductdetails() ',(done:DoneFn)=>{
        //     httpClientSpy.post;
        //     bookingService.addProductsDetails(POSTS).subscribe({
        //         next:(posts)=>{
        //             expect(posts).toEqual(POSTS);
        //             done();
        //         },
        //         error:()=>{
        //             done.fail
        //         },
        //     });
        //     const req=httpTestingController.expectOne('http://localhost:3000/');
        //         expect(req.request.method).toEqual('POST');
        //         expect(req.request.body).toEqual(POSTS);
        //     expect(httpClientSpy.post).toHaveBeenCalled();
        // });

        // it('#post #addProductsDetailsbangluru() ',(done:DoneFn)=>{
        //     httpClientSpy.post;
        //     bookingService.addProductsDetailsbangluru(POSTS).subscribe({
        //         next:(posts)=>{
        //             expect(posts).toEqual(POSTS);
        //             done();
        //         },
        //         error:()=>{
        //             done.fail
        //         },
        //     });
        //     const req=httpTestingController.expectOne('http://localhost:3000/');
        //         expect(req.request.method).toEqual('POST');
        //         expect(req.request.body).toEqual(POSTS);
        //     expect(httpClientSpy.post).toHaveBeenCalled();
        // });

        // it('#post #addProductsDetailsroyapuram() ',(done:DoneFn)=>{
        //   spyOn(httpClientSpy,'post');
        //     bookingService.addProductsDetailsroyapuram(POSTS).subscribe({
        //         next:(posts)=>{
        //             expect(posts).toEqual(POSTS);
        //             done();
        //         },
        //         error:()=>{
        //             done.fail
        //         },
        //     });
        //     const req=httpTestingController.expectOne('http://localhost:3000/');
        //         expect(req.request.method).toEqual('POST');
        //         expect(req.request.body).toEqual(POSTS);
        //     expect(httpClientSpy.post).toHaveBeenCalled();
        // });

        // it('#post #addProductsDetailsjammu() ',(done:DoneFn)=>{
        //     httpClientSpy.post;
        //     bookingService.addProductsDetailsjammu(POSTS).subscribe({
        //         next:(posts)=>{
        //             expect(posts).toEqual(POSTS);
        //             done();
        //         },
        //         error:()=>{
        //             done.fail
        //         },
        //     });
        //     const req=httpTestingController.expectOne('http://localhost:3000/');
        //         expect(req.request.method).toEqual('POST');
        //         expect(req.request.body).toEqual(POSTS);
        //     expect(httpClientSpy.post).toHaveBeenCalled();
        // });

     //
        // it('# deleteproductchennai() should return expected value',()=>{
        //     const mockProduct={
        //         id: 1,
        //         tittle: "manohar oyo hotel",
        //         area: "kaswadi street",
        //         price: "3807",
        //         image: "bang3.jpg",
        //         email: "habi@123",
        //         location: "Banguluru"
        //       }
        //     const  id=1;
        //     bookingService.deleteproductchennai(id).subscribe((response:any)=>{
        //         expect(response).toEqual(mockProduct);
               
        //     });
        //     const req=httpTestingController.expectOne(`http://localhost:3000/productdatachennai/${id}`);
        //     expect(req.request.method).toBe("DELETE");
        //     req.flush(mockProduct);
            
        // });        



        // it('#put putproductchennai',(done:DoneFn)=>{
        //     const id=1
        //     bookingService.putproductchennai(POSTS,id).subscribe((data:any)=>{
        //         expect(data).toEqual(POSTS);
        //         done();
        //     });
        //     const req=httpTestingController.expectOne({
        //         method:'PUT'
        //     });
        //  });
          
            // httpClientSpy.delete.and.returnValue(of(POSTS));
            // bookingService.deleteproductchennai(POSTS).subscribe({
            //     next:(posts)=>{
            //         expect(posts).toEqual(POSTS);
            //         done();
            //     },
            //     error:()=>{
            //         done.fail
            //     },
            // });
            // expect(httpClientSpy.delete).toHaveBeenCalledTimes(1);
        

    it('should be created', () => {
        expect(service).toBeTruthy();
      });
  });