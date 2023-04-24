import { GetProductComponent } from './get-product.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from '@angular/router';


describe('UserBookedDetailsComponent ', () => {
  let component:GetProductComponent ;
  let fixture: ComponentFixture<GetProductComponent>;
  let router:Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetProductComponent],
      imports:[HttpClientTestingModule],
      providers:[HttpClient,HttpHandler,],
     
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});