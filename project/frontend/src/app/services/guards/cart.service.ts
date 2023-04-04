import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // addingindatabse(item: { id: number; name: string; price: number; }) {
  //   throw new Error('Method not implemented.');
  // }
  // public cartItemList: any = [];
  // public productList = new BehaviorSubject<any>([]);
  // counts:any
  // filterarray:any;
  // constructor(private httpClient: HttpClient) {}
  // //getter
  // getProducts() {
  //   return this.productList.asObservable();
  // }

  // addtoCarts(product: any) {
  //   this.cartItemList.push(product);
  //   this.productList.next(this.cartItemList);
  //   console.log(this.cartItemList);
  // }

  // addtoCartbangaluru(item: any) {
  //   this.cartItemList.push(item);
  //   this.productList.next(this.cartItemList);
  // }
 


  // addtoCartsjammu(item: any) {
  //   this.cartItemList.push(item);
  //   this.productList.next(this.cartItemList);
  // }
 
  // addtoCartbangalurubookedpage(item: any) {
  //   this.cartItemList.push(item);
  //   this.productList.next(this.cartItemList);
  // };

  // getaddcartDetailsOfAllLocation(){
  //   const httpHeaders = new HttpHeaders();
  //   httpHeaders.append('content-type', 'application/json');
  //   return this.httpClient.get('http://localhost:8080/api/cart',{
  //     headers: httpHeaders,
  //   });
    
  // };

  // postaddcartDetailsOfAllLocation(createResource:any){
  //   const httpHeaders = new HttpHeaders();
  //   httpHeaders.append('content-type', 'application/json');
  //   return this.httpClient.post('http://localhost:8080/api/cart', createResource,{
  //     headers: httpHeaders,
  //   });
  // };

  // deleteAllCartLocation(id: number) {
  //   return this.httpClient.delete('http://localhost:8080/api/cart' + id).pipe(
  //     map((res: any) => {
  //       return res;
  //     })
  //   );
  // };

  // count(){
  //   console.log('abs')
  //   this.getaddcartDetailsOfAllLocation().subscribe(res=>{
  //     console.log(res,Array.isArray(res));
  //     if(Array.isArray(res)){
  //       this.counts=res.filter(s=>s.email==JSON.parse(localStorage.getItem('userData') || '{}').Email)
  //         console.log(this.counts.length);
  //     }
  //   }) 
  // }

}
