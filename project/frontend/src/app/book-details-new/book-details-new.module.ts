import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookDetailsNewRoutingModule } from './book-details-new-routing.module';
import { MainPageComponent } from './main-page/main-page.component';
import { Location1Component } from './location1/location1.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    MainPageComponent,
    Location1Component,
  
  ],
  imports: [
    CommonModule,
    NgbModule,
    BookDetailsNewRoutingModule
    
  ]
})
export class BookDetailsNewModule { }
