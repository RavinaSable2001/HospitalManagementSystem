import { Component } from '@angular/core';
import { PatientClass } from '../patient-class';
import { PatientServiceService } from '../patient-service.service';
import { Router } from '@angular/router';
import { DocauthService } from '../docauth.service';
@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent {

  constructor(private patientService:PatientServiceService,private router:Router,private docauth:DocauthService)
  {

  }
patients:PatientClass[]=[];
ngOnInit():void
{
  this.getpatients();
}

getpatients()
{
 this.patientService.getPatientList().subscribe(data=>{
  this.patients=data;
 })
}

update(id:number)
{
  this.router.navigate(['update-patient',id])
}

delete(id: number) {
  console.log("Trying to delete patient ID:", id);  // Debug log

  if (confirm("Are you sure you want to delete this patient?")) {
    this.patientService.delete(id).subscribe(
      response => {
        console.log("Deleted successfully:", response);
        alert("Patient deleted successfully!");
        this.getpatients(); // Refresh list
      },
      error => {
        console.error("Error deleting patient:", error);
        alert("Failed to delete patient. Please check console.");
      }
    );
  }
}

view(id:number)
{
      this.router.navigate(['view_patients',id]);
}

logout()
{
  this.docauth.logout();
  this.router.navigate(['home'])
}

}
