import { ProductDetailsService } from './../../service/product-details.service';
import { CartDetailsService } from './../../service/cart-details.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-location1',
  templateUrl: './location1.component.html',
  styleUrls: ['./location1.component.scss'],
})
export class Location1Component implements OnInit {
  duplicateLocationList: any = [];
  getAllDetails: any;
  bookingList: any = [];
  state: any;

  constructor(
    private router: Router,
    private cart: CartDetailsService,
    private product: ProductDetailsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.state = this.activatedRoute.snapshot.params['state'];
    this.noDuplication();
    this.getAllDetailsOfLocation();
  }

  noDuplication() {
    this.product.getProduct().subscribe((res) => {
      this.bookingList = res;
      for (var i = 0; i < this.bookingList.length; i++) {
        if (this.bookingList[i].location == this.state) {
          this.duplicateLocationList.push(this.bookingList[i]);
        }
      }
      console.log(res);
      console.log(this.duplicateLocationList);
      this.bookingList = this.duplicateLocationList;
    });
  }

  addToCart(item: any) {
    console.log(item);
    var abc = false;
    console.log('adding in');

    console.log(this.getAllDetails);
    for (var i = 0; i < this.getAllDetails.length; i++) {
      if (this.getAllDetails[i].tittle == item.tittle) {
        abc = true;
      }
    }
    if (abc) {
      alert('Product cannot be added twice');
    } else {
      alert('Product added successfully in the cart');
      this.addingInDatabase(item);
      this.router.navigate(['add-to-cart']);
    }
  }

  getAllDetailsOfLocation() {
    this.cart.getAddCartDetailsOfAllLocation().subscribe((data) => {
      this.getAllDetails = data;
      console.log(this.getAllDetails);
      console.log(data);
    });
  }

  addingInDatabase(item: any) {
    this.cart.postAddCartDetailsOfAllLocation(item).subscribe((data) => {
      console.log(data);
    });
  }
}
