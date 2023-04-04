import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {

  constructor(private httpClient: HttpClient) {}

  url="http://localhost:8080";

  getProduct() {
    console.log('getProduct method');
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    return this.httpClient.get(`${this.url}/api/product`, {
      headers: httpHeaders,
    });
  }

  getedit(id: any) {
    console.log(id);
    return this.httpClient.get(`${this.url}/api/product/${id}`).pipe(
      map((res: any) => {
        return res;
      })
    );
  };

  addProductDetails(createResource: any) {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    return this.httpClient.post(
      `${this.url}/api/product`,
      createResource,
      { headers: httpHeaders }
    );
  };
   //delete
   deleteproductchennai(id: number) {
    return this.httpClient
      .delete(`${this.url}/api/product` + id)
      .pipe(
        map((response: any) => {
          return response;
        })
      );
  };
  deleteProduct(id: number) {
    return this.httpClient.delete(`${this.url}/api/product` + id).pipe(
      map((res: any) => {
        return res;
      })
    );
  };

  putproduct(id: any, UpdatedBody: any) {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    return this.httpClient.put(
      `${this.url}/api/product` + id,
      UpdatedBody,
      { headers: httpHeaders }
    );
  };


}
