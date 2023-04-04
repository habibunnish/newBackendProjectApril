import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserBookedHistoryService {
  constructor(private httpClient: HttpClient) {}
  // getUseBookeddata() {
  //   const httpHeaders = new HttpHeaders();
  //   httpHeaders.append('content-type', 'application/json');
  //   return this.httpClient.get('http://localhost:3000/userbookeddetails', {
  //     headers: httpHeaders,
  //   });
  // }

  // UserBookedData(createResource: any) {
  //   const httpHeaders = new HttpHeaders();
  //   httpHeaders.append('content-type ', 'applcation/json');
  //   return this.httpClient.post(
  //     'http://localhost:3000/userbookeddetails',
  //     createResource,
  //     { headers: httpHeaders }
  //   );
 // }

 

  // cart(product: any) {
  //   const httpHeaders = new HttpHeaders();
  //   httpHeaders.append('content-type', 'application/json');
  //   return this.httpClient.get('http://localhost:3000/userbookeddetails/', product
  //   );
  // }
}
