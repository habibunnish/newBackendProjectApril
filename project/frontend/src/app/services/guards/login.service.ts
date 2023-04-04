import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private httpClient: HttpClient) {}
  //getlogin
  // getUserLogin() {
  //   const httpHeaders = new HttpHeaders();
  //   httpHeaders.append('content-type', 'application/json');
  //   return this.httpClient.get('http://localhost:8080/api/user', {
  //     headers: httpHeaders,
  //   });
  // }
  // //login post
  // addNewContactUser(createResource: any) {
  //   const httpHeaders = new HttpHeaders();
  //   httpHeaders.append('content-type', 'application/json');
  //   return this.httpClient.post(
  //     'http://localhost:8080/api/user',
  //     createResource,
  //     { headers: httpHeaders }
  //   );
  // }

  // userRegisterDetails() {
  //   const httpHeaders = new HttpHeaders();
  //   httpHeaders.append('content-type', 'application/json');
  //   return this.httpClient.get('http://localhost:8080/api/user', {
  //     headers: httpHeaders,
  //   });
  // }

  // //register post
  // addNewUserRegisterDetails(registerResource: any) {
  //   const httpHeaders = new HttpHeaders();
  //   httpHeaders.append('content-type', 'application/json');
  //   return this.httpClient.post(
  //     'http://localhost:8080/api/user',
  //     registerResource,
  //     { headers: httpHeaders }
  //   );
  // }

  // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // //admin login
  // adminLoginDetailsGet() {
  //   const httpHeaders = new HttpHeaders();
  //   httpHeaders.append('content-type', 'application/json');
  //   return this.httpClient.get(
  //     'http://localhost:8080/api/user',

  //     { headers: httpHeaders }
  //   );
  // }
  // adminLoginDetailsPost(registerResource: any) {
  //   const httpHeaders = new HttpHeaders();
  //   httpHeaders.append('content-type', 'application/json');
  //   return this.httpClient.post(
  //     'http://localhost:3000/adminLogin/',
  //     registerResource,
  //     { headers: httpHeaders }
  //   );
  // }
}
