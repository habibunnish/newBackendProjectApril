import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  constructor(private httpClient: HttpClient) {}

  url='http://localhost:8080';

  
  addNewContactUser(data: any) {
    return this.httpClient.post(`${this.url}/api/user`,data
    );
  }

  userRegisterDetails() {
    return this.httpClient.get(`${this.url}/auth/register` )
     
  }

  register(data: any) {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    return this.httpClient.post(`${this.url}/auth/register`,data,{ headers: httpHeaders }
    );
  }

  adminLoginDetailsGet() {
    return this.httpClient.get(`${this.url}/api/user`);
  };

  getUserLogin() {
    return this.httpClient.get(`${this.url}/api/login`);
  };
}
