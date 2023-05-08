import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {

  constructor(private httpClient: HttpClient) {}

  url="http://localhost:8082";

  getProduct() {
    console.log('getProduct method');
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    return this.httpClient.get(`${this.url}/api/product`, { headers: httpHeaders,}
    );
  }

  getEdit(id: any) {
    console.log(id);
    return this.httpClient.get(`${this.url}/api/product/${id}`).pipe(
      map((res: any) => {
        return res;
      })
    );
  };

  addProductDetails(data: any) {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    return this.httpClient.post( `${this.url}/api/product`,data);
  };
  
   deleteProductChennai(id: number) {
    return this.httpClient.delete(`${this.url}/api/product/${id}`).pipe(
        map((response:any) => {
          return response
        }),
      );
  };
  deleteProduct(id: number) {
    return this.httpClient.delete(`${this.url}/api/product/` + id).pipe(
      map((res: any) => {
        return res;
      })
    );
  };

  putProduct(id: any, UpdatedBody: any) {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    return this.httpClient.put(
      `${this.url}/api/product/${id}`,
      UpdatedBody,
      { headers: httpHeaders }
    );
  };


}
