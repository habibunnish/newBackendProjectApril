import { UserBookedDetailsComponent } from './user-booked-details.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';


describe('UserBookedDetailsComponent ', () => {
  let component:UserBookedDetailsComponent ;
  let fixture: ComponentFixture<UserBookedDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserBookedDetailsComponent ],
      providers:[HttpClient,HttpHandler],
     
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBookedDetailsComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});