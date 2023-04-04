import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { GetProductComponent } from './get-product/get-product.component';
import { UserBookedDetailsComponent } from './user-booked-details/user-booked-details.component';
import { AddNewDataComponent } from './add-new-data/add-new-data.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GetProductComponent,
    UserBookedDetailsComponent,
    AddNewDataComponent,
    AddToCartComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, FormsModule, ReactiveFormsModule],
})
export class AdminModule {}
