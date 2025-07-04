import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DocauthService } from '../docauth.service';

@Component({
  selector: 'app-doglogin',
  templateUrl: './doglogin.component.html',
  styleUrls: ['./doglogin.component.css']
})
export class DogloginComponent {

  username:string='';
  password:string='';

  inValidLogin=false;
  constructor(private router:Router,private docauth:DocauthService)
  {

  }

  cheaklogin()
  {
    if(this.docauth.authenticate(this.username,this.password))
    {
     
      this.router.navigate(['doclogin']);
     this.inValidLogin=false;
    }
    else
    {
      this.inValidLogin=true;
      alert("Wrong Credintials")
       this.router.navigate(['home']);
      

    }
   
  }

}
