import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(){
    const admins=localStorage.getItem("adminData");
    if(admins!=null){
      this.router.navigate(['home-page'])
      return false;
    }else{
      return true;
    }
   }
  
}
