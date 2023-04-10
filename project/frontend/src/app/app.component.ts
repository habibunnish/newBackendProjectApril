import { CartDetailsService } from './service/cart-details.service';
import { Component} from '@angular/core';
import { Router } from '@angular/router';


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
 };

 BookDetailsNew(){
   console.log('mainpage')
   this.router.navigate(['main-page'])
 };

 

 home(){
  this.router.navigate(['home-page']);
 };

 query(){
  this.router.navigate(['how-it-work']);
 };

  adminloggedin(){
    return localStorage.getItem('adminData');
  }
  onadminlogout(){
    localStorage.removeItem('adminData');
  };
  

}
