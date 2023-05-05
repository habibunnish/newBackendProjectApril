import { BookedDetailsService } from './../../service/booked-details.service';
import { CartDetailsService } from './../../service/cart-details.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/guards/cart.service';


@Component({
  selector: 'app-user-booked-details',
  templateUrl: './user-booked-details.component.html',
  styleUrls: ['./user-booked-details.component.scss'],
})
export class UserBookedDetailsComponent implements OnInit{

  Productuser: any;
  items:any;
  constructor(
    private booked:BookedDetailsService,
    private router:Router
  ) {}
ngOnInit(){
  this.getalldetailsOfLocation()
}
  
  getalldetailsOfLocation(){
    console.log("dfcgvhbn")
    this.booked.getBookedData().subscribe((data) => {
      console.log(data);
      this.items=data
    });
  }
  
 
  goback(){
    this.router.navigate(['get-product'])
  }

}

 

