
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import { HowItWorkComponent } from './how-it-work/how-it-work.component';


@NgModule({
  declarations: [
    LoginFormComponent,
    RegisterFormComponent,
    HomePageComponent,
    HowItWorkComponent,
   
  ],
  imports: [
    CommonModule,
    NgbModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class UsersModule { }
