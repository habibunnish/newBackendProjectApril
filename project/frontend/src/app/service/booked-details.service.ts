import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookedDetailsService {

  constructor(private httpClient: HttpClient) {}

  url='http://localhost:8080';

  UserBookedData(createResource: any) {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type ', 'applcation/json');
    return this.httpClient.post(`${this.url}/api/userBookedDetails` ,
      createResource,
      { headers: httpHeaders }
    )
  };
}
