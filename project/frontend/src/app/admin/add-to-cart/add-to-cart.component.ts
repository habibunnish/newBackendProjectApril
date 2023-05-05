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
  items: any = [];
  ProductTitle: any;
  Email: any;
  Location: any;
  Price: any;
  Image: any;
  quantity: any;

  prodId: any;
  ProductQuantity: any = [];
  file: any;
  item: any;
  counts: any;

  constructor(
    private cart: CartDetailsService,
    private router: Router,
    private booked: BookedDetailsService
  ) {}

  //post
  addProduct(item: any) {
   console.log('print', item);
   item.total= item.quantity*item.price 
      this.booked.UserBookedData(item).subscribe((data) => {
        console.log(data);
        alert('product added successfully');
      });
  }

  book(item: any) {
    console.log(item);
    this.addProduct(item);
    alert('product has been booked successfully ');
    this.router.navigate(['user-booked-details']);
  }

  ngOnInit() {
    this.getalldetailsOfLocation();
    console.log('getalldetailsoflocation');
  }

  getalldetailsOfLocation() {
    this.cart.getaddcartDetailsOfAllLocation().subscribe((data) => {
      this.items = data;
      this.prodId = data;
      this.ProductQuantity = data;

      for (var i = 0; i < this.ProductQuantity.length; i++) {
        this.ProductQuantity[i].quantity = 1;
      }

      console.log(this.items);
      console.log(data);
    });
  }

  delete(item: any) {
    //  delete item.id ;
    console.log('deleteitems', item.id);
    this.cart.deleteAllCartLocation(item._id).subscribe((data) => {
      this.getalldetailsOfLocation();
      console.log(data);
    });
  }

  goback() {
    this.router.navigate(['home-page']);
  }

  incQnt(index: any) {
    console.log('Product qua ' + JSON.stringify(this.ProductQuantity));
    if (this.ProductQuantity[index].quantity < 3) {
      this.ProductQuantity[index].quantity =
        this.ProductQuantity[index].quantity + 1;
    } else {
      alert('sdjfskd');
    }
  }

  decQnt(index: any) {
    console.log('Product qua ' + JSON.stringify(this.ProductQuantity));
    if (this.ProductQuantity[index].quantity > 0) {
      this.ProductQuantity[index].quantity =
        this.ProductQuantity[index].quantity - 1;
    } else {
      alert('sdfsdf');
    }
  }


}
