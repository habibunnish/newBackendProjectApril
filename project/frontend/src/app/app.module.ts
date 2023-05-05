import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookDetailsNewModule } from './book-details-new/book-details-new.module';
import { UsersModule } from './users/users.module';
import { AdminModule } from './admin/admin.module';



@NgModule({
  declarations: [AppComponent,],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
   
    HttpClientModule,
    NgbModule,
    AdminModule,
    BookDetailsNewModule,
    UsersModule,
   
  ],
 
})
export class AppModule {}
