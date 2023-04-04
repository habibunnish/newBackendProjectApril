import { MainPageDetailsService } from './../../service/main-page-details.service';
import { AddNewDataService } from './../../services/guards/add-new-data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
List: any=[];
List2: any=[];
List3:any=[];
List4:any=[];

title='CHECK  THE BEST HOTEL IN INDIA'

  constructor(config: NgbCarouselConfig, private router: Router,private main:MainPageDetailsService) {
    config.interval = 4000;
    config.wrap = true;
    config.pauseOnHover = false;
  }
  ngOnInit(){
    this.dynamic();
    this.next();
    this.display();
    this.show();
  }
 
  
  location(data :any){
    console.log(data);
    this.router.navigate([`location1/${data}`])
  }

  dynamic(){
     console.log('method to display');
    this.main.mainPage().subscribe(data=>{
      this.List=data;
      console.log(this.List);
      console.log(data);
     })
   }

   next(){
    console.log('method to display');
    this.main.mainpageGoa().subscribe(data=>{
      this.List2=data;
      console.log(this.List2);
      console.log(data);
     })
   }
   
   display(){
    console.log('method to display');
    this.main.bangaluru().subscribe(data=>{
      this.List3=data;
      console.log(this.List3);
      console.log(data);
     })
   }

   show(){
    console.log('method to display');
    this.main.jammu().subscribe(data=>{
      this.List4=data;
      console.log(this.List4);
      console.log(data);
     })
   }

  
 }
