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
  
  public productList: any;

 
  ngOnInit(){
    this.productList = this.product.getProduct().subscribe((data) => {
      console.log(data, this.productList);
      this.productList = data;
    });
  }
  getAllProduct() {
    this.product.getProduct().subscribe((res) => {
      this.productList = res;
    });
  }


  deleteData(product: any) {
    console.log('delete data() calling ', product.id);
    this.product.deleteProduct(product._id).subscribe(data => {
      this.getAllProduct();
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
