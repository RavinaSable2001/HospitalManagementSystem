import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {

  constructor() { }

  authenticate(username:string,password:string)
  {
    if(username=='admin'&&password=='admin@123')
    {
      sessionStorage.setItem('username',username);
      return true
    }

    else
    {
      return false;
    }
  }

  isUserLogin()
  {
    console.log("user login is completed...")
     let user =sessionStorage.getItem('username');
     return !(user==null)
  }

  logout()
  {
    console.log("user logout successfully.........");
    sessionStorage.removeItem('username');
  }
}
