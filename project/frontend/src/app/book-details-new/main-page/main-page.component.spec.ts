import { RouterTestingModule } from '@angular/router/testing';
import { MainPageComponent } from './main-page.component';
import { ComponentFixture, TestBed} from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';


describe('MainPageComponent ', () => {
  let component:MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule],
      declarations: [MainPageComponent],
      providers:[HttpClient,HttpHandler],
      schemas:[CUSTOM_ELEMENTS_SCHEMA]
     
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
 



  it('should create', () => {
    expect(component).toBeTruthy();
  });
});