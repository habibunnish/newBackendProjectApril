import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddNewDataService {
  constructor(private httpClient: HttpClient) {}
  // getedit(id: any) {
  //   console.log(id);
  //   return this.httpClient.get(`http://localhost:8080/api/product/${id}`).pipe(
  //     map((res: any) => {
  //       return res;
  //     })
  //   );
  // }

  // mainPage(){
  //   const httpHeaders = new HttpHeaders();
  //   httpHeaders.append('content-type', 'application/json');
  //   return this.httpClient.get(`http://localhost:3000/mainpageChennai`,{
  //     headers:httpHeaders
  //   });
  // }
  // mainpageGoa(){
  //   const httpHeaders = new HttpHeaders();
  //   httpHeaders.append('content-type', 'application/json');
  //   return this.httpClient.get(`http://localhost:3000/mainpagegoa`,{
  //     headers:httpHeaders
  //   });
  // }
  // bangaluru(){
  //   const httpHeaders = new HttpHeaders();
  //   httpHeaders.append('content-type', 'application/json');
  //   return this.httpClient.get(`http://localhost:3000/mainpagebangluru`,{
  //     headers:httpHeaders
  //   });
  // }
  // jammu(){
  //   const httpHeaders = new HttpHeaders();
  //   httpHeaders.append('content-type', 'application/json');
  //   return this.httpClient.get(`http://localhost:3000/mainpageJammu`,{
  //     headers:httpHeaders
  //   });
  // }
}

