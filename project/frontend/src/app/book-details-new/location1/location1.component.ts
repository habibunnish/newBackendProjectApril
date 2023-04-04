import { ProductDetailsService } from './../../service/product-details.service';
import { CartDetailsService } from './../../service/cart-details.service';
import {  Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/guards/admin.service';
import { CartService } from 'src/app/services/guards/cart.service';


@Component({
  selector: 'app-location1',
  templateUrl: './location1.component.html',
  styleUrls: ['./location1.component.scss']
})
export class Location1Component implements OnInit  {
 
  duplicateLocationList :any=[]
getalldetails:any;
  bookingList: any;
  state: any;

  constructor(
    private router:Router, 
    private cart: CartDetailsService,
    private product:ProductDetailsService,
    private activatedRoute: ActivatedRoute
  ){}

  ngOnInit() {
    this.state = this.activatedRoute.snapshot.params['state'];
    this.noDuplication();
    this.getalldetailsOfLocation();
   
  }

  noDuplication(){
    this.product.getProduct().subscribe((res) => {
      this.bookingList = res;
    for(var i =0;i<this.bookingList.length;i++){
      if(this.bookingList[i].location==this.state){
       this.duplicateLocationList.push(this.bookingList[i])
       
      }
    };
     console.log(res);
     console.log(this.duplicateLocationList);
     this.bookingList=this.duplicateLocationList;

    });
  }

  addto(item: any) {
    console.log(item);
    var abc = false;
    console.log('adding in');
    this.addingindatabase(item);
    console.log(this.getalldetails);
    for (var i = 0; i < this.getalldetails.length; i++) {
      if (this.getalldetails[i].tittle == item.tittle) {
        abc = true;
      }
    }
    if (abc) {
       alert('Product cannot be added twice');
      
    }
    else{
      alert('Product added successfully in the cart')
      this.router.navigate(['add-to-cart'])
    }
  }

  getalldetailsOfLocation(){
    this.cart.getaddcartDetailsOfAllLocation().subscribe(data=>{
      this.getalldetails=data;
      console.log(this.getalldetails);
      console.log(data);
    })

  }
  addingindatabase(item:any){
    this.cart.postaddcartDetailsOfAllLocation(item).subscribe(data=>{
      console.log(data);
    })
  }
  // GoBack(){
  //   this.router.navigate(['main-page']);
  // }
}
