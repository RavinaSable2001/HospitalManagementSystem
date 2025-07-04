import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocauthService {

  constructor() { }

  authenticate(username:string,password:string)
  {
    if(username=="ravina"&&password=="rau@2130")
    {
      sessionStorage.setItem('username',username);
      return true;
    }
    else
    {
      return false;
    }
  }

  

  isUserAuthLogin(): boolean {  // ✅ Fixed method name
    console.log("Checking doctor login...");
    let user = sessionStorage.getItem('username');
    console.log("Logged-in user:", user);
    return user !== null;  // ✅ Fixed condition
  }

  logout(): void {
    console.log("Doctor logged out successfully...");
    sessionStorage.removeItem('username'); // ✅ Removed extra space
  }

}
