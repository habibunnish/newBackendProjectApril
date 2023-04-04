import { AuthGuard } from './../services/guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Location1Component } from './location1/location1.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  {path:'location1/:state',component:Location1Component,},
  {path:'main-page',component:MainPageComponent,}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookDetailsNewRoutingModule { }
