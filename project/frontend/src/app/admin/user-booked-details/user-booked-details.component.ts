import { BookedDetailsService } from './../../service/booked-details.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-booked-details',
  templateUrl: './user-booked-details.component.html',
  styleUrls: ['./user-booked-details.component.scss'],
})
export class UserBookedDetailsComponent implements OnInit{


  items:any;
  constructor(
    private booked:BookedDetailsService,
    private router:Router
  ) {}
ngOnInit(){
  this.getAllDetailsOfLocation()
}
  
  getAllDetailsOfLocation(){
    console.log("dfcgvhbn")
    this.booked.getBookedData().subscribe((data) => {
      console.log(data);
      this.items=data
    });
  }
  
 
  goBack(){
    this.router.navigate(['get-product'])
  }

}

 

