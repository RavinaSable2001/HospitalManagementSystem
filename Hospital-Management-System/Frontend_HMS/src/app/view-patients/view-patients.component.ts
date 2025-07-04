import { Component } from '@angular/core';
import { PatientServiceService } from '../patient-service.service';
import { ActivatedRoute } from '@angular/router';
import { PatientClass } from '../patient-class';

@Component({
  selector: 'app-view-patients',
  templateUrl: './view-patients.component.html',
  styleUrls: ['./view-patients.component.css']
})
export class ViewPatientsComponent {

  id:number=0;
  patient:PatientClass=new PatientClass();
  constructor(private patientservice:PatientServiceService,private route:ActivatedRoute)
  {

  }

  ngOnInit():void{

    this.id=this.route.snapshot.params['id'];
    this.patientservice.getPatientById(this.id).subscribe(data=>{
    this.patient=data;
    })
  }
  
}
