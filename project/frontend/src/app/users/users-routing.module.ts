import { LoginDetailsComponent } from './login-details/login-details.component';
import { AuthGuard } from './../services/guards/auth.guard';
import { HomePageComponent } from './home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { HowItWorkComponent } from './how-it-work/how-it-work.component';

const routes: Routes = [
  {
    path: 'login-details',
    component: LoginDetailsComponent,
    
   
  },
  {
    path: 'register-form',
    component: RegisterFormComponent,
    
  },
  { path: 'home-page', component: HomePageComponent },
  { path: 'how-it-work', component: HowItWorkComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
