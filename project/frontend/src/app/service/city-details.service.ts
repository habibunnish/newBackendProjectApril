import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CityDetailsService {

  constructor(private httpClient: HttpClient) {}

  url="http://localhost:8080";

   //post
  addProductsDetails(createResource: any) {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    return this.httpClient.post(`${this.url}/api/city`,
      createResource,
      { headers: httpHeaders }
    );
  };

  //post
  addProductsDetailsbangluru(createResource: any) {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    return this.httpClient.post(
      `${this.url}/api/city`,
      createResource,
      { headers: httpHeaders }
    );
  };


  //post
  addProductsDetailsroyapuram(createResource: any) {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    return this.httpClient.post(
      `${this.url}/api/city`,
      createResource,
      { headers: httpHeaders }
    );
  };


  //post
  addProductsDetailsjammu(createResource: any) {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    return this.httpClient.post(`${this.url}/api/city`, createResource, {
      headers: httpHeaders,
    });
  }

}
