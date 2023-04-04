import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartDetailsService {

  public cartItemList: any = [];
  public productList = new BehaviorSubject<any>([]);
  counts:any
  filterarray:any;
  constructor(private httpClient: HttpClient) {}

  url="http://localhost:8080";
  getProducts() {
    return this.productList.asObservable();
  }

  getaddcartDetailsOfAllLocation(){
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    return this.httpClient.get(`${this.url}/api/cart`,{
      headers: httpHeaders,
    });
    
  };

  postaddcartDetailsOfAllLocation(createResource:any){
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    return this.httpClient.post(`${this.url}/api/cart`, createResource,{
      headers: httpHeaders,
    });
  };

  deleteAllCartLocation(id: number) {
    return this.httpClient.delete(`${this.url}/api/cart` + id).pipe(
      map((res: any) => {
        return res;
      })
    );
  };
  // count(){
  //    this.getaddcartDetailsOfAllLocation().subscribe(res=>{
  //     console.log(res,Array.isArray(res));
  //     if(Array.isArray(res)){
  //       this.counts=res.filter(s=>s.email==JSON.parse(localStorage.getItem('userData') || '{}').Email)
  //         console.log(this.counts.length);
  //     }
  //   }) 
  // }

}
