import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import{AddNewDataService} from 'src/app/services/guards/add-new-data.service'
import { TestBed } from '@angular/core/testing';


describe(' CartService ', () => {
  let service:  AddNewDataService ;
  let httpMock:HttpTestingController;

  // beforeEach(() => {
  //   TestBed.configureTestingModule({
  //     imports:[HttpClientTestingModule],
  //     providers:[AddNewDataService]
  //   });
  //   service = TestBed.inject( AddNewDataService );
  //   httpMock=TestBed.inject(HttpTestingController);
  // });

  // afterEach(()=>{
  //   httpMock.verify();
  // });
  // it('should get a product by id',()=>{
  //   const mockProduct={
  //     id: 38,
  //     tittle: "Radha hometel sarovar hotel",
  //     area: "tamabaram road",
  //     price: "3600",
  //     image: "chennai2.jpg",
  //     email: "habi@123",
  //     location: "Chennai"
  //   }
  //   const id=1;
  //   service.getedit(id).subscribe((product:any)=>{
  //     expect(product).toEqual(mockProduct);
  //   });
  //   const req=httpMock.expectOne(`http://localhost:3000/product/${id}`);
  //   expect(req.request.method).toBe('GET');
  //   req.flush(mockProduct);
  // });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});