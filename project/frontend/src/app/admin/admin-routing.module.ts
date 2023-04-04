import { AdminGuard } from './../services/guards/admin.guard';
import { LoginFormComponent } from './../users/login-form/login-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewDataComponent } from './add-new-data/add-new-data.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { GetProductComponent } from './get-product/get-product.component';
import { UserBookedDetailsComponent } from './user-booked-details/user-booked-details.component';

const routes: Routes = [
  { path: 'get-product', component: GetProductComponent,canActivate:[AdminGuard] },
  { path: 'add-to-cart', component: AddToCartComponent },
  { path: 'add-new-data/:id', component: AddNewDataComponent },
  { path: 'user-booked-details', component: UserBookedDetailsComponent },
  {path:'login-form',component:LoginFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
