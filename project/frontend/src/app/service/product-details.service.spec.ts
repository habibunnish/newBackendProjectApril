import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ProductDetailsService } from './product-details.service';

describe('ProductDetailsService', () => {
  let service: ProductDetailsService;
  let httpMock:HttpTestingController;
  let httpClientSpy:jasmine.SpyObj<HttpClient>;
  let PRODUCTSDETAILS:any=[
    {
      "id": 38,
      "tittle": "Radha hometel sarovar hotel",
      "area": "tamabaram road",
      "price": "3600",
      "image": "chennai2.jpg",
      "email": "",
      "location": "Chennai"
    }
  ];
  let id:1;
  let POSTS:any=[
    {
      id:1,
      tittle: "manohar oyo hotel",
      area: "kaswadi street",
      price: "3807",
      image: "bang3.jpg",
      location: "Banguluru",
      locations:"Banguluru"
    }
  ]

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[ProductDetailsService]
    });
    service = TestBed.inject(ProductDetailsService);
    httpMock=TestBed.inject(HttpTestingController);

  });

  afterEach(()=>{
    httpMock.verify();
  });

  it('should get a product by id',()=>{
    const mockProduct={
      id: 38,
      tittle: "Radha hometel sarovar hotel",
      area: "tamabaram road",
      price: "3600",
      image: "chennai2.jpg",
      locations:"Chennai",
      location: "Chennai",
      quantity:"1"
    }
    const id=1;
    service.getedit(id).subscribe((product:any)=>{
      expect(product).toEqual(mockProduct);
    });
    const req=httpMock.expectOne(`http://localhost:8082/api/product/${id}`);
    expect(req.request.method).toBe("GET");
    req.flush(mockProduct);
  });

  it("post method for addProductDetails",(done:DoneFn)=>{
    httpClientSpy.post;
    service.addProductDetails(POSTS).subscribe({
      next:(posts)=>{
        expect(posts).toEqual(POSTS);
        done();
      },
      error:()=>{
        done.fail
      },
    })
    const req=httpMock.expectOne(`http://localhost:8082/`);
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(POSTS);
    expect(httpClientSpy.post).toHaveBeenCalled();
  });

  it("delete productChennai() calling",()=>{
    const mockProduct={
      id: 1,
      tittle: "manohar oyo hotel",
      area: "kaswadi street",
      price: "3807",
      image: "bang3.jpg",
      email: "habi@123",
      location: "Banguluru"
    }
    const id=1;
    service.deleteproductchennai(id).subscribe((res:any)=>{
      expect(res).toEqual(mockProduct);
    });
    const req=httpMock.expectOne(`http://localhost:8082/api/product/${id}`);
    expect(req.request.method).toBe('DELETE');
    req.flush(mockProduct);
  });

  
  it("putproduct()",(done:DoneFn)=>{
    service.putproduct(id,PRODUCTSDETAILS).subscribe((data:any)=>{
      expect(data).toEqual(PRODUCTSDETAILS);
      done();
    });
    const req=httpMock.expectOne({
      method:'PUT'
    })
  });

  it("delte product()",(done:DoneFn)=>{
    service.deleteProduct(id).subscribe((data:any)=>{
      expect(data).toEqual(PRODUCTSDETAILS);
      done();
    });
    const req=httpMock.expectOne({
      method:'DELETE'
    });
  })


  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
