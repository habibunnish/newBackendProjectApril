import { HowItWorkComponent } from './how-it-work.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';



describe('HowItWorkComponent ', () => {
  let component: HowItWorkComponent;
  let fixture: ComponentFixture<HowItWorkComponent>;
  let h3:HTMLElement;
  let h1:HTMLElement;
  let h4:HTMLElement;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule ],
      declarations: [ HowItWorkComponent],
      providers:[HttpClient,HttpHandler],
     
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowItWorkComponent);
    component = fixture.componentInstance;
    h3=fixture.nativeElement.querySelector('h3');
    h1=fixture.nativeElement.querySelector('h1');
    h4=fixture.nativeElement.querySelector('h4');
    
  });
  it('should display the  details',()=>{
    fixture.detectChanges();
    fixture.whenStable().then(()=>{
      expect(h3.innerHTML).toBeTruthy();
      expect(h1.innerHTML).toBeTruthy();
      expect(h4.innerHTML).toBeTruthy();
  
    })
   
  })
  it('should go to home booking page if buttons get click',()=>{
    spyOn(component,'book').and.callThrough();
    fixture.detectChanges();
    let button=fixture.debugElement.query(By.css('#button')).nativeElement;
    button.click();
    fixture.detectChanges();
    fixture.whenStable().then(()=>{
       expect(component.book).toHaveBeenCalled();
    })
   
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});