import { CartDetailsService } from './../../service/cart-details.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/guards/cart.service';


@Component({
  selector: 'app-user-booked-details',
  templateUrl: './user-booked-details.component.html',
  styleUrls: ['./user-booked-details.component.scss'],
})
export class UserBookedDetailsComponent implements OnInit {
  Productuser: any;
  items:any;
  constructor(
    private cart:CartDetailsService,
    private router:Router
  ) {}
  ngOnInit() {
    this.getalldetailsOfLocation();
  }
  //get
  getalldetailsOfLocation(){
    this.cart.getaddcartDetailsOfAllLocation().subscribe(data=>{
      this.items=data;
      console.log(this.items);
      console.log(data);
    })
  }
 
  goback(){
    this.router.navigate(['get-product'])
  }
}
