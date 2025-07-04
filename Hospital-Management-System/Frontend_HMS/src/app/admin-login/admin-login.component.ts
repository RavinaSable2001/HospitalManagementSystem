import { Component } from '@angular/core';
import { AdminAuthService } from '../admin-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  username:string=''
  password:string=''

  inValidLogin=false;

  constructor(private adminauthservice:AdminAuthService,private router:Router)
  {
             
  }

  cheaklogin()
             {
              if(this.adminauthservice.authenticate(this.username,this.password))
              {

                this.router.navigate(['admin'])
                this.inValidLogin=false;
                   
              }

              else
              {
                this.inValidLogin=true;
                alert("wrong Credentials")
                this.router.navigate(['home'])
              }
             }

}
