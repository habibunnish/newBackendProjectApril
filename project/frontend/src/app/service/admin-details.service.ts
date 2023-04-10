import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminDetailsService {

  constructor(private httpClient: HttpClient) {}

  url='http://localhost:8080';
URLS='http://localhost:8082'
  
  //login post
  adminRegister(data: any) {
    return this.httpClient.post(`${this.URLS}/api/admin`,data
    );
  }

  //admin register post
  adminregister(data:any){
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    return this.httpClient.post(`${this.url}/auth/adminlogin`,data,{ headers: httpHeaders }
    );
    }

  adminLoginDetailsGet(data:any) {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    return this.httpClient.post(`${this.url}/api/admin`,data,{ headers: httpHeaders }
    );
  };

 
}
