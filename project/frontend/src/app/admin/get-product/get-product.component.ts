import { ProductDetailsService } from './../../service/product-details.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


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
  deletedata(product: any) {
    console.log('delete data() calling ', product.id);
    this.product.deleteProduct(product._id).subscribe(data => {
      this.getallproduct();
      console.log(data);
    });
    alert('deleted this details');
  }
  
  edit(id: any) {
    this.router.navigate(['add-new-data/' + id]);
  }
 
 
  logout(){
    this.router.navigate(['how-it-work']);
  }
}
