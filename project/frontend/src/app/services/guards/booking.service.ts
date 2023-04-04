import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  constructor(private httpClient: HttpClient) {}

  // URL:String='http://localhost:3000/';
  //getProductchennai
  // getProducts() {
  //   const httpHeaders = new HttpHeaders();
  //   httpHeaders.append('content-type', 'application/json');
  //   return this.httpClient.get('http://localhost:3000/productdatachennai', {
  //     headers: httpHeaders,
  //   });
  // }

  // //post
  // addProductsDetails(createResource: any) {
  //   const httpHeaders = new HttpHeaders();
  //   httpHeaders.append('content-type', 'application/json');
  //   return this.httpClient.post(
  //     'http://localhost:8080/api/product',
  //     createResource,
  //     { headers: httpHeaders }
  //   );
  // }

  // //delete
  // deleteproductchennai(id: number) {
  //   return this.httpClient
  //     .delete('http://localhost:8080/api/product' + id)
  //     .pipe(
  //       map((response: any) => {
  //         return response;
  //       })
  //     );
  // }


  // //post
  // addProductsDetailsbangluru(createResource: any) {
  //   const httpHeaders = new HttpHeaders();
  //   httpHeaders.append('content-type', 'application/json');
  //   return this.httpClient.post(
  //     'http://localhost:8080/api/product',
  //     createResource,
  //     { headers: httpHeaders }
  //   );
  // }


  // //post
  // addProductsDetailsroyapuram(createResource: any) {
  //   const httpHeaders = new HttpHeaders();
  //   httpHeaders.append('content-type', 'application/json');
  //   return this.httpClient.post(
  //     'http://localhost:8080/api/product',
  //     createResource,
  //     { headers: httpHeaders }
  //   );
  // }


  // //post
  // addProductsDetailsjammu(createResource: any) {
  //   const httpHeaders = new HttpHeaders();
  //   httpHeaders.append('content-type', 'application/json');
  //   return this.httpClient.post('http://localhost:8080/api/product', createResource, {
  //     headers: httpHeaders,
  //   });
  // }

}
