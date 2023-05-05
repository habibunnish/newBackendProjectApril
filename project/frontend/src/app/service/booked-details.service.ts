import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookedDetailsService {

  constructor(private httpClient: HttpClient) {}

  url='http://localhost:8082';

  userBookedData(createResource: any) {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type ', 'applcation/json');
    return this.httpClient.post(`${this.url}/api/booked` ,
      createResource,
      { headers: httpHeaders }
    )
  };

  getBookedData(){
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    return this.httpClient.get(`${this.url}/api/booked`,{
      headers: httpHeaders,
    });
    
  };

}
