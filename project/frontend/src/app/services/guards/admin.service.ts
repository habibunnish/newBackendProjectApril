import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private httpClient: HttpClient) {}

  //getProduct
  // getProduct() {
  //   console.log('getProduct method');
  //   const httpHeaders = new HttpHeaders();
  //   httpHeaders.append('content-type', 'application/json');
  //   return this.httpClient.get('http://localhost:8080/api/product', {
  //     headers: httpHeaders,
  //   });
  // }
  // //post
  // addProductDetails(createResource: any) {
  //   const httpHeaders = new HttpHeaders();
  //   httpHeaders.append('content-type', 'application/json');
  //   return this.httpClient.post(
  //     'http://localhost:8080/api/product',
  //     createResource,
  //     { headers: httpHeaders }
  //   );
  // }
  // putproduct(id: any, UpdatedBody: any) {
  //   const httpHeaders = new HttpHeaders();
  //   httpHeaders.append('content-type', 'application/json');
  //   return this.httpClient.put(
  //     'http://localhost:8080/api/product' + id,
  //     UpdatedBody,
  //     { headers: httpHeaders }
  //   );
  // }
  // //delete
  // deleteProduct(id: number) {
  //   return this.httpClient.delete('http://localhost:8080/api/product' + id).pipe(
  //     map((res: any) => {
  //       return res;
  //     })
  //   );
  // }
}
