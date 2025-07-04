import { Component } from '@angular/core';
import { PatientClass } from '../patient-class';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { PatientServiceService } from '../patient-service.service';

@Component({
  selector: 'app-update-patients',
  templateUrl: './update-patients.component.html',
  styleUrls: ['./update-patients.component.css']
})
export class UpdatePatientsComponent  {

  id!: number; // Avoid setting it to 0 explicitly
  constructor(private route:ActivatedRoute,private patientservice:PatientServiceService,private router:Router)
  {

  }
  patient:PatientClass=new PatientClass();


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.patientservice.getPatientById(this.id).subscribe(
      (data) => {
        console.log('Fetched patient:', data);
        this.patient = data; // ✅ Ensure this sets the data properly
      },
      (error) => {
        console.error('Error fetching patient:', error);
      }
    );
  }
  
  


  onSubmit() {
    this.patientservice.updatePatient(this.id, this.patient).subscribe(
      (data) => {
        console.log('Updated patient data:', data);
        alert('Patient updated successfully!');
        this.router.navigate(['/doclogin']); // Redirect after update
      },
      (error) => {
        console.error('Error updating patient:', error);
        alert('Update failed. Please try again.');
      }
    );
  }
  


 

}
