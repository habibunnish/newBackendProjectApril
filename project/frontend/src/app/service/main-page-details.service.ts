import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainPageDetailsService {

  constructor(private httpClient: HttpClient) {}

  url="http://localhost:8080";
  
  main(data:any){
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    return this.httpClient.post(`${this.url}/api/main`, data,{
      headers: httpHeaders,
    });
  }

  mainPage(){
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    return this.httpClient.get(`${this.url}/api/main/mainpage`,{
      headers:httpHeaders
    });
  }
  mainpageGoa(){
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    return this.httpClient.get(`${this.url}/api/main/goa`,{
      headers:httpHeaders
    });
  };

  bangaluru(){
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    return this.httpClient.get(`${this.url}/api/main/bangluru`,{
      headers:httpHeaders
    });
  };

  jammu(){
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    return this.httpClient.get(`${this.url}/api/main/jammu`,{
      headers:httpHeaders
    });
  };


}
