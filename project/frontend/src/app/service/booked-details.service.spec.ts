import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { BookedDetailsService } from './booked-details.service';

describe('BookedDetailsService', () => {
  let service: BookedDetailsService;
  let httpClientSpy:{post:jasmine.Spy};
  let httpClientspy:{get:jasmine.Spy};

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[BookedDetailsService]
    });
    service = TestBed.inject(BookedDetailsService);
    httpClientSpy=jasmine.createSpyObj("HttpClient",["post"]);
    httpClientspy=jasmine.createSpyObj("HttpClient",["get"]);

  });

  it("should make a post request to the booked endpoint with correct headers and data",()=>{
    const createResource={
      tittle:"abch ",
      location:"Chennai",
      quantity:"1",
      total:"2201",
      image:"chennai2.jpg"

    };
    const expectedHeaders=new HttpHeaders().append("content-type","application/json");
    const expectedUrl=`${'http://localhost:8082'}/api/booked`;
    httpClientSpy.post.and.returnValue(of({}));
    service.userBookedData(createResource).subscribe(()=>{
      expect(httpClientSpy.post.calls.count()).toBe(1);
      expect(httpClientSpy.post.calls.argsFor(0)).toEqual([expectedUrl,createResource,{Headers:expectedHeaders}]);
    })
  });
  it("should make a get request to the booked endpoint with the correct headers",()=>{
    const expectedHeaders=new HttpHeaders().append("content-type",'application/json');
    const expectedUrl=`${'http://localhost:8082'}/api/booked`;
    httpClientspy.get.and.returnValue(of({}));
    service.getBookedData().subscribe(()=>{
      expect(httpClientspy.get.calls.count()).toBe(1);
      expect(httpClientspy.get.calls.argsFor(0)).toEqual([expectedUrl,{Headers:expectedHeaders}]);
    });
  });
 

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
