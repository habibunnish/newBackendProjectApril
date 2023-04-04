import { ProductDetailsService } from './../../service/product-details.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../../services/guards/admin.service';

@Component({
  selector: 'app-get-product',
  templateUrl: './get-product.component.html',
  styleUrls: ['./get-product.component.scss'],
})
export class GetProductComponent implements OnInit {
  constructor(private product: ProductDetailsService, private router: Router) {}
  public ProductList: any;

  //get
  ngOnInit(){
    this.ProductList = this.product.getProduct().subscribe((data) => {
      console.log(data, this.ProductList);
      this.ProductList = data;
    });
  }
  getallproduct() {
    this.product.getProduct().subscribe((res) => {
      this.ProductList = res;
    });
  }

  //delete product
  deletedata(data: any) {
    console.log('delete data() calling ', data.id);
    this.product.deleteProduct(data.id).subscribe((res) => {
      this.getallproduct();
    });
    alert('deleted this details');
  }
  
  edit(id: any) {
    this.router.navigate(['add-new-data/' + id]);
  }
  userbooked() {
    this.router.navigate(['user-booked-details']);
  }
  gotoaddnewpage() {
    console.log('addnew data page');
    this.router.navigate(['add-new-data/' + 0]);
  }
  gotobooking(){
    this.router.navigate(['main-page']);
  }
  logout(){
    this.router.navigate(['how-it-work']);
  }
}
