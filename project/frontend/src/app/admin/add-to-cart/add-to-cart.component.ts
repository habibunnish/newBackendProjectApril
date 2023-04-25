import { BookedDetailsService } from './../../service/booked-details.service';
import { CartDetailsService } from './../../service/cart-details.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/guards/cart.service';
import { UserBookedHistoryService } from 'src/app/services/guards/user-booked-history.service';



@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss'],
})
export class AddToCartComponent implements OnInit {
 
  
  product: any;
  items:any=[];
  ProductTitle: any;
  Email: any;
  Location: any;
  Price: any;
  Image: any;
  // quantity:any;
  prodId:any;
 
  ProductQuantity:any=[
    {
      quantity:1,
      // prodId:1

    }
  ];
  file: any;
  item: any;
  counts:any;

  
  constructor(
    private cart:CartDetailsService,
    private router: Router,
    private booked: BookedDetailsService
  ) {}
  //post
  addProduct(item: any) {
    //  delete item.id ;

    console.log('print', item);
    if (localStorage.getItem('userData') != null) {
      var email = JSON.parse(localStorage.getItem('userData') || '{}');
      item.email = email.email;
      console.log(this.item);
      console.log("email")
      this.booked.UserBookedData(item).subscribe((data) => {
        console.log(data);
       
        alert('product added successfully');
      });
    }
   
  }
  book(item: any) {
    this.addProduct(item);
    alert('product has been booked successfully ');
    this.router.navigate(['home-page']);
    
  }
 

  ngOnInit() {
   this.getalldetailsOfLocation();
   console.log('getalldetailsoflocation')
  }

  getalldetailsOfLocation(){
    this.cart.getaddcartDetailsOfAllLocation().subscribe(data=>{
      this.items=data;
      console.log(this.items);
      console.log(data);
    })

  }

  delete(item: any) {
    //  delete item.id ;
    console.log('deleteitems', item.id);
    this.cart.deleteAllCartLocation(item._id).subscribe(data=>{
      this.getalldetailsOfLocation();
      console.log(data);
    })
   }
 
  goback() {
    this.router.navigate(['home-page']);
  }

// incQnt(prodId:any,quantity:any){

//   console.log(prodId);
//   console.log(quantity);
//   for(let i=0;i<this.items.length;i++)
//   if(this.items[i].prodId===prodId){
//     if(quantity!=5)
//     this.items[i].qnt=parseInt(quantity)+1
//      }
//   }

  incQnt(prodId:any,quantity:any){
    console.log(prodId,quantity)
    for(let i=0;i<this.ProductQuantity.length;i++)
    if(this.ProductQuantity[i].id===prodId){
      if(quantity!=5)
      this.ProductQuantity[i].quantity=parseInt(quantity)+1
    }
    // this.cart.updateDelivery(this.id,data)
    
  }

decQnt(prodId:any,quantity:any){
  console.log(prodId,quantity)
  for(let i=0;i<this.ProductQuantity.length;i++)
  if(this.ProductQuantity[i].id===prodId){
    if(quantity!=1)
    this.ProductQuantity[i].quantity=parseInt(quantity)-1
  }
 
}


}
