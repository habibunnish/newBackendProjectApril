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
  items:any=[
    {
    _id:'',
  
  }
]
  ProductTitle: any;
  Email: any;
  Location: any;
  Price: any;
  Image: any;
  // quantity:any;
 
  prodId:any
  ProductQuantity:any=[
    {
      quantity:1,
      prodId:''

    }
  ]
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
      this.prodId=data
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
//   for(let i=0;i<this.items.length;i++){
//     if (this.items[i]._id.includes(prodId)){
//       // prodId===this.items[i]._id
//       const index = this.ProductQuantity.findIndex((pq: { prodId: any; }) => pq.prodId === prodId);

//       if (index !== -1) {
      
//       if(quantity != 5) {
      
//       this.ProductQuantity[index].quantity += 1;
      
//       }
//       // console.log(prodId);
//       // if(quantity != 5) 
//       // { 
//       //   this.ProductQuantity.prodId=prodId
//       //   this.ProductQuantity[i].quantity += 1;
//       //   console.log([i]);
        
//       //  }
//        break; 
//       }
//     }
//   }
//   }
incQnt(prodId: any, quantity: any) {
   console.log(prodId);
   console.log(quantity);
  let matchingItem = this.items.find((items: { _id: any; }) => items._id === prodId);
  let index = this.ProductQuantity.findIndex((obj: { prodId: string; }) => obj.prodId === prodId || obj.prodId === '');
  console.log(index);
  if (matchingItem && index !== -1) {
   
   this.ProductQuantity[index].prodId = prodId;
  if (quantity != 5) {
  this.ProductQuantity[index].quantity += 1;
    }
  console.log(index);
   }
    else 
  {
  console.log("Error: Matching item or ProductQuantity object not found.");
    }
  }

  
  // for(let i=0;i<this.items.length;i++){
  // if (this.items[i]._id.includes(prodId)) {
  //   console.log(this.items[i]._id);
  //   if(quantity!=5)
  //   quantity+=1
  //   console.log(quantity);
  //   this.ProductQuantity.quantity=quantity
  //   console.log( this.ProductQuantity.quantity);
  //   console.log("enter into if")
  //    }
  //  }
  // for(let i=0;i<this.ProductQuantity.length;i++)
  // { 
  //   { if(quantity != 5) 
  //     { this.ProductQuantity[i].quantity += 1; } break; }
  //   }

   


  // incQnt(prodId:any,quantity:any){
  //   console.log(prodId,quantity)
  //   for(let i=0;i<this.ProductQuantity.length;i++)
  //   if(this.ProductQuantity[i].prodId===prodId){
  //     if(quantity!=5)
  //     this.ProductQuantity[i].quantity=parseInt(quantity)+1
  //   }
  //   // this.cart.updateDelivery(this.id,data)
    
  // }

decQnt(prodId:any,quantity:any){
  console.log(prodId,quantity)
  for(let i=0;i<this.ProductQuantity.length;i++)
  if(this.ProductQuantity[i].prodId===prodId){
    if(quantity!=1)
    this.ProductQuantity[i].quantity=parseInt(quantity)-1
  }
 
}


increment(data:any,name:string) {
  
  }
  decrement(_t22: any,arg1: any) {

  }

}
