import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 constructor(private router:Router){}
 
 
 canActivate(): | Observable<boolean | UrlTree>| Promise<boolean | UrlTree>| boolean| UrlTree {
   const users=localStorage.getItem("userData");
   console.log("kjhgfyu");
   if(users!=null ){
    console.log('auth');
    alert("already loged in")
    this.router.navigate(['home-page'])
    return false;
    
   }
   else{
    console.log('else auth');
        return true;
   }
 
 }
 
}
