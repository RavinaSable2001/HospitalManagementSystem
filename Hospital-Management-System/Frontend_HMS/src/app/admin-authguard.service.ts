import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChildFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminAuthService } from './admin-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthguardService implements CanActivate{

  constructor(private adminauthservice:AdminAuthService,private router:Router) { }

  canActivate() {

   if(this.adminauthservice.isUserLogin())
   {
        return true;
   }
   else
   {
         this.router.navigate(['admin-login'])
         return false;
   }
      
  }
}
