import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CityDetailsService {

  constructor(private httpClient: HttpClient) {}

  url="http://localhost:8082";

  addProductsDetails(createResource: any) {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    return this.httpClient.post(`${this.url}/api/city/Chennai`,
      createResource,
      { headers: httpHeaders }
    );
  };


  addProductsDetailsBangluru(createResource: any) {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    return this.httpClient.post(
      `${this.url}/api/city/Banguluru`,
      createResource,
      { headers: httpHeaders }
    );
  };


  addProductsDetailsRoyapuram(createResource: any) {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    return this.httpClient.post(
      `${this.url}/api/city/goa`,
      createResource,
      { headers: httpHeaders }
    );
  };


 
  addProductsDetailsJammu(createResource: any) {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    return this.httpClient.post(`${this.url}/api/city/Jammu`, createResource, {
      headers: httpHeaders,
    });
  }

}
