import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginDetailsService {

  constructor(private httpClient: HttpClient) {}

  url='http://localhost:8080';

  login(data:any){
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    return this.httpClient.post(`${this.url}/auth/login`, data,{
      headers: httpHeaders,
    });
  }

 getUserLogin() {
  return this.httpClient.get(`${this.url}/auth/login`)
 };

  adminLoginDetailsGet(){
    return this.httpClient.get(`${this.url}/auth/adminlogin`)
  };

}