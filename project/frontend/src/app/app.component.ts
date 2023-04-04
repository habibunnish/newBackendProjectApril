import { CartDetailsService } from './service/cart-details.service';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from './services/guards/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private router: Router,
     private cart:CartDetailsService

 ) {  }

 totalitem: any;  

 ngOnInit() {
   this.cart.getProducts().subscribe((res) => {
     this.totalitem=res ;
     console.log(res);
   });
  //  this.cart.count()
 }
 

 hotel() {
   console.log('helppage');
   this.router.navigate(['booking-page']);
 }
 loggedin(){
 
   return localStorage.getItem('userData');
 }
 
 onlogout(){
   localStorage.removeItem('userData');
   localStorage.removeItem('adminData');
 };
 BookDetailsNew(){
   console.log('mainpage')
   this.router.navigate(['main-page'])
 };

 onadminlogout(){
   localStorage.removeItem('adminData');
 };

 home(){
  this.router.navigate(['home-page']);
 };
 query(){
  this.router.navigate(['how-it-work']);
 };

  // logedIn(){
  //   return localStorage.getItem('adminData');
  // }
  // logout(){
  //   return localStorage.removeItem('adminData');
  // }

  adminloggedin(){
    return localStorage.getItem('adminData');
  }
  
}
