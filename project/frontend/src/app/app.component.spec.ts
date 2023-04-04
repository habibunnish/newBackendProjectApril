import { HttpClient, HttpHandler } from '@angular/common/http';
import { Component } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

//x here means it will skip the test
describe ('AppComponent', () => {
let fixture:ComponentFixture<AppComponent>;
let Component:AppComponent;
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers:[HttpClient,HttpHandler,{provide:Router}],
      declarations: [AppComponent],
      
    }).compileComponents();
   });
  

  //  it('testing localstorage  of onlogout buton',()=>{
  //   fixture.detectChanges();
  //   fixture.whenStable().then(()=>{
  //     const onlogout=spyOn(Component,'onlogout').and.callThrough();
  //     const buttonElement:HTMLButtonElement=fixture.debugElement.nativeElement.querySelector('#logout');
  //     buttonElement.click();
  //     localStorage.removeItem('userData');
  //     expect(onlogout).toBeFalsy();
  //   })
    
  //  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
     const app = fixture.componentInstance;

    expect(app).toBeTruthy();
  });

  
  
  



  //xit here means skipping this one test file not other files test
  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'newangular app is running!'
    );
  });
});
