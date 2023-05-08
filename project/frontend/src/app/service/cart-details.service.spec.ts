import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { CartDetailsService } from './cart-details.service';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';

describe('CartDetailsService', () => {
  let service: CartDetailsService;
 let httpClient:HttpClient;
 let httpTestingController:HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,RouterTestingModule],
      providers:[CartDetailsService],
      schemas:[NO_ERRORS_SCHEMA]
     
    });
    service = TestBed.inject(CartDetailsService);
   httpClient=TestBed.inject(HttpClient);
   httpTestingController=TestBed.inject(HttpTestingController);

  });
  afterEach(()=>{
    httpTestingController.verify();
  });
  it("should make a GET request to the cart endpoint with the correct headers",()=>{
    const expectedUrl=`${'http://localhost:8082'}/api/cart`;
    const expectedHeaders=new HttpHeaders().append("content-type",'application/json');
    service.getAddCartDetailsOfAllLocation().subscribe();
    const req=httpTestingController.expectOne(expectedUrl);
    expect(req.request.method).toEqual("GET");
    expect(req.request.headers.get("content-type")).toEqual(expectedHeaders.get("content-type"));

  });
  it('should return the data from the server', () => {
    const expectedUrl = `${service.url}/api/cart`;
    const expectedData = [{ id: 1, name: 'item 1' }, { id: 2, name: 'item 2' }];

    service.getAddCartDetailsOfAllLocation().subscribe((data) => {
      expect(data).toEqual(expectedData);
    });

    const req = httpTestingController.expectOne(expectedUrl);
    req.flush(expectedData);
  });
  it('should handle errors from the server', () => {
    const expectedUrl = `${service.url}/api/cart`;
    const errorResponse = new HttpErrorResponse({ status: 500, statusText: 'Server error' });

    service.getAddCartDetailsOfAllLocation().subscribe(
      () => fail('Expected an error, but got a success response'),
      (error) => {
        expect(error).toEqual(errorResponse);
      }
    );

    const req = httpTestingController.expectOne(expectedUrl);
    req.flush(null, { status: 500, statusText: 'Server error' });
  });
  
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
