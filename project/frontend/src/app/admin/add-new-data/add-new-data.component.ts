import { ProductDetailsService } from './../../service/product-details.service';
import { CityDetailsService } from './../../service/city-details.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-add-new-data',
  templateUrl: './add-new-data.component.html',
  styleUrls: ['./add-new-data.component.scss'],
})
export class AddNewDataComponent implements OnInit {
  
  location: any;
  file: any;
  id: any;
  chosenMod: any;

  @Output()
  change = new EventEmitter();

  locations = [
    { name: 'Chennai' },
    { name: 'goa' },
    { name: 'Banguluru' },
    { name: 'Jammu' },
  ];

  roomDetails = {
    _id:'',
    tittle: '',
    area: '',
    price: '',
    image: '',
    location: '',
    locations:'',
    quantity:'',
  };
  selectedLocation: string=""
  selectedImage: string=""

  constructor(
    private http: HttpClient,
    private router: Router,
    private city: CityDetailsService,
    private product:ProductDetailsService,
    private activatedRoute: ActivatedRoute,
    
    
  ) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id']; 
    if (this.id != 0) this.GetEdits();
    
  }
  GetEdits() {
    this.product.getEdit(this.id).subscribe((data) => {
      console.log(data);
      this.roomDetails = data;
      this.selectedLocation = this.roomDetails.location;
       this.selectedImage=this.roomDetails.image
      });
  }

  adding(roomDetails: any) {
    roomDetails.image = this.file.name;
    this.addNewProduct(roomDetails);
    this.addProduct(roomDetails);
  }

  /*@post*/
  addNewProduct(roomDetails: any) {
    console.log(this.location);
    roomDetails.location = this.location;
    if (this.location == 'Chennai') {
      this.city.addProductsDetails(roomDetails).subscribe((res) => {
        console.log(res);
      });
    } else if (this.location == 'Banguluru') {
      this.city
        .addProductsDetailsBangluru(roomDetails)
        .subscribe((res) => {
          console.log(res);
        });
    } else if (this.location == 'goa') {
      this.city
        .addProductsDetailsRoyapuram(roomDetails)
        .subscribe((res) => {
          console.log(res);
        });
    } else if (this.location == 'Jammu') {
      this.city
        .addProductsDetailsJammu(roomDetails)
        .subscribe((res) => {
          console.log(res);
        });
    }
  }

  changeDone(a: any) {
    console.log('method is run');
    console.log(a);
    this.location = a;
    console.log(this.location);
  }
  modo($event: any) {
    console.log('changing', $event.target.value);
    this.changeDone($event.target.value);
  }

  /*@post :for showing in page*/
  addProduct(roomDetails: any) {
    console.log('addproduct method calling');
    roomDetails.locations = JSON.stringify(this.locations);
    console.log(roomDetails.locations);
    this.product.addProductDetails(roomDetails).subscribe((data) => {
      console.log(data);
      // roomdetails=res
      alert('product added successfully');
    });
  }

  putting() {
    this.updatePutProduct();
  }

  updatePutProduct() {
    console.log(this.roomDetails, this.roomDetails._id);
    console.log(this.roomDetails);
    this.product.putProduct(this.roomDetails._id, this.roomDetails).subscribe((data: any) => {
        console.log(data);
        alert('product edited successfully');
      });
  }

  deleteData(data: any) {
    console.log('delete data() calling ', data.id);
    this.product.deleteProductChennai(data._id).subscribe((res) => {
      console.log(res);
    });
    alert('deleted this details');
  }

  getFile(event: any) {
    this.file = event.target.files[0];
    console.log('file', this.file.name);
    
    this.roomDetails.image = this.file.name;
    this.selectedImage=this.roomDetails.image
    console.log('getfile');
  }
  submitData() {
    let formData = new FormData();
    formData.set('file', this.file);
    this.http.post('http://localhost:8080/api/product', formData).subscribe((res) => {
      console.log(res);
    });
  }
  checkPage() {
    this.router.navigate(['get-product']);
  }
}
