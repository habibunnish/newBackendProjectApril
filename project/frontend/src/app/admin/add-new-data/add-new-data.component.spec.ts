import { CityDetailsService } from './../../service/city-details.service';
import { ProductDetailsService } from './../../service/product-details.service';
import { AddNewDataComponent } from './add-new-data.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { of } from 'rxjs';


describe('AddNewDataComponent ', () => {
  let component:AddNewDataComponent ;
  let fixture: ComponentFixture<AddNewDataComponent>;
  let httpMock:HttpTestingController;
  let router:Router;
  let product:ProductDetailsService;
  let city:CityDetailsService;
  let geteditspy:jasmine.Spy;
  let roomdetails = {};
  let id=[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule,HttpClientTestingModule],
      declarations: [AddNewDataComponent],
      providers:[HttpClient,HttpHandler,ProductDetailsService,CityDetailsService,{provide:Router}],
      schemas:[NO_ERRORS_SCHEMA]
     
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewDataComponent);
    component = fixture.componentInstance;
    product=TestBed.inject(ProductDetailsService);
    geteditspy=spyOn(product,'getedit').and.returnValue(of({roomdetails}));
    city=TestBed.inject(CityDetailsService);
    fixture.detectChanges();
  });

  it('should  get getfile()',()=>{
    const file=new File(['test'],'test.txt');
    const event={target:{files:[file]}};
    component.getFile(event);
  });

  beforeEach(()=>{
    spyOn(component,'changedone').and.callThrough();
    spyOn(console,'log');
    httpMock=TestBed.inject(HttpTestingController);
  })

  it('should call changedone method with crct value',()=>{
    const event={target:{value:'Chennai'}};
    component.modo(event);
    expect(component.changedone).toHaveBeenCalledWith('Chennai');
    expect(console.log).toHaveBeenCalledWith('changing','Chennai');
    expect(console.log).toHaveBeenCalledWith();
  });

  afterEach(()=>{
    httpMock.verify();
  })

  it('should  get getfile()',()=>{
    const file=new File(['test'],'test.txt');
    const event={target:{files:[file]}};
    component.getFile(event);
  });

  it('submitdata method calling',()=>{
    const file=new File(['test'],'test.txt');
    const mock={success:true};
    const formData=new FormData();
    formData.set('file',file);
    const req=httpMock.expectOne('http://localhost:3000/');
    expect(req.request.method).toEqual('POST');
    expect(req.request.body.get('file')).toEqual(file);
    component.file=file;
    component.submitData();
    expect(console.log).toHaveBeenCalledWith(mock);
  });


  //didnt increased ccov
  it('should call the addnewdataService.getedit() method and roomdetails',()=>{
    const id= TestBed;
    component.id=id;
    component.GetEdits();
    expect(geteditspy).toHaveBeenCalledWith(id);
    expect(component.roomdetails).toBeDefined();
  });
 
it('dhould delete data and display alert',()=>{
  spyOn(product,'deleteproductchennai');
  const data=null;
  component.deletedata(data);
  expect(product.deleteproductchennai).not.toHaveBeenCalled();
 
});



it('should call addproductdetails when location is chennai',()=>{
  const city=jasmine.createSpyObj('city',['addProductDetails','addProductDetailsbangluru','addProductDetailsgoa','addProductDetailsjammu']);
  const mockRoomdetails={
    id: 0,
    tittle: 'abc',
    area: 'abdsd',
    price: '2341',
    image: 'bang1.jpg',
    email: 'hvdjabi@123',
    location:'Chennai'
  };
  
  component.location = 'invalid_location';
    spyOn(console, 'error');
    component.addnewproduct(mockRoomdetails);
    expect(console.error).toHaveBeenCalledWith('Invalid location:', 'invalid_location');
 

})

  

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});