import { BookedDetailsService } from './../../service/booked-details.service';
import { CartDetailsService } from './../../service/cart-details.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss'],
})
export class AddToCartComponent implements OnInit {
  product: any;
  items: any = [];
  Email: any;
  Location: any;
  Price: any;
  Image: any;
  quantity: any;
  prodId: any;
  productQuantity: any = [];
  file: any;
  item: any;
  counts: any;

  constructor(
    private cart: CartDetailsService,
    private router: Router,
    private booked: BookedDetailsService
  ) {}

  addProduct(item: any) {
   console.log('print', item);
   item.total= item.quantity*item.price 
      this.booked.userBookedData(item).subscribe((data) => {
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
    this. getAllDetailsOfLocation();
    console.log('getalldetailsoflocation');
  }

  getAllDetailsOfLocation() {
    this.cart.getAddCartDetailsOfAllLocation().subscribe((data) => {
      this.items = data;
      this.prodId = data;
      this.productQuantity = data;

      for (var i = 0; i < this.productQuantity.length; i++) {
        this.productQuantity[i].quantity = 1;
      }

      console.log(this.items);
      console.log(data);
    });
  }

  delete(item: any) {
    console.log('deleteitems', item.id);
    this.cart.deleteAllCartLocation(item._id).subscribe((data) => {
      this. getAllDetailsOfLocation();
      console.log(data);
    });
  }

  goback() {
    this.router.navigate(['home-page']);
  }

  incQnt(index: any) {
    console.log('Product qua ' + JSON.stringify(this.productQuantity));
    if (this.productQuantity[index].quantity < 3) {
      this.productQuantity[index].quantity =
        this.productQuantity[index].quantity + 1;
    } else {
      alert('cannot book  room more than 3 times');
    }
  }

  decQnt(index: any) {
    console.log('Product quantity ' + JSON.stringify(this.productQuantity));
    if (this.productQuantity[index].quantity > 0) {
      this.productQuantity[index].quantity =
        this.productQuantity[index].quantity - 1;
    } 
  }


}
