import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { AdminDetailsService } from './admin-details.service';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { HttpClient } from '@angular/common/http';

describe('AdminDetailsService', () => {
  let service: AdminDetailsService;
  let httpMock:HttpTestingController;
  let httpClientSpy:jasmine.SpyObj<HttpClient>;
  let value:any=[
    {
      
      "firstname": "habibunnisha",
      "lastname": "A",
      "street": "plot no 89/66 periyar nagar thiruvottriyur chennai-19",
      "city": "chennai",
      "state": "tamilnadu",
      "zipcode": "600019",
      "email": "habicute111@gmail.com",
      "password":"Habi@5555",
      "id": 1
    }
  ];
  let id:1;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[AdminDetailsService],
      schemas:[NO_ERRORS_SCHEMA]
     
    });
    service = TestBed.inject(AdminDetailsService);
    httpMock=TestBed.inject(HttpTestingController);
   });

  afterEach(()=>{
    httpMock.verify();
  });

  it("post method for addProductDetails",(done:DoneFn)=>{
    httpClientSpy.post;
    service.adminRegister(value).subscribe({
      next:(posts)=>{
        expect(posts).toEqual(value);
        done();
      },
      error:()=>{
        done.fail
      },
    })
    const req=httpMock.expectOne(`http://localhost:8082/`);
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(value);
    expect(httpClientSpy.post).toHaveBeenCalled();
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
