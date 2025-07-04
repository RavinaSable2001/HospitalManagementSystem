import { Component } from '@angular/core';
import { PatientServiceService } from '../patient-service.service';
import { PatientClass } from '../patient-class';
import { AdminAuthService } from '../admin-auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrls: ['./admindash.component.css']
})
export class AdmindashComponent {

  patients:PatientClass[]=[];
  constructor(private patientservice:PatientServiceService,private adminauthservice:AdminAuthService,private router:Router)
  {}
  ngOnInit():void
  {
    this.getpatients();
  }

  getpatients()
  {
    this.patientservice.getPatientList().subscribe(data=>{

      this.patients=data;

    }
    )
   
  }

  delete(id: number) {
    if (confirm("Are you sure you want to delete this appointment?")) {
      this.patientservice.delete(id).subscribe(
        data => {
          console.log("Deleted successfully:", data);
          this.getpatients(); // Refresh the list after deletion
        },
        error => {
          console.error("Error deleting appointment:", error);
        }
      );
    }

    
  
  }
  logout()
  {
      this.adminauthservice.logout();
     this.router.navigate(['home']);
  }
}
