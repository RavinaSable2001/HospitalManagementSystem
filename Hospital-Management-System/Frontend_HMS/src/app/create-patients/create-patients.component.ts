import { Component } from '@angular/core';
import { PatientClass } from '../patient-class';
import { PatientServiceService } from '../patient-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-patients',
  templateUrl: './create-patients.component.html',
  styleUrls: ['./create-patients.component.css']
})
export class CreatePatientsComponent {

  patient:PatientClass=new PatientClass();
  constructor(private patientservice:PatientServiceService,private router:Router)
  {

  }

  savepatient()
  {
    this.patientservice.createpatients(this.patient).subscribe(data=>{
      console.log(data);
      this.gotopatientlist();

    })
  }

  onSubmit()
  {
    this.savepatient();
  }
  
  gotopatientlist()
  {
    this.router.navigate(['/doclogin']);
  }
}
