import { Component } from '@angular/core';
import { Appoinment } from '../appoinment';
import { AppoinmentService } from '../appoinment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-appoinment',
  templateUrl: './create-appoinment.component.html',
  styleUrls: ['./create-appoinment.component.css']
})
export class CreateAppoinmentComponent {

 appoinment:Appoinment=new Appoinment();
 constructor(private appoinmentservice:AppoinmentService,private router:Router){}

 saveappoinment(){
  this.appoinmentservice.createappoinment(this.appoinment).subscribe(data=>{
    console.log(data);
    this.gotoappoinment();
  })
 }

 onSubmit() {
  if (!this.appoinment.name || !this.appoinment.age || !this.appoinment.symptomps || !this.appoinment.mobileno) {
    alert("Please fill in all required fields correctly.");
    return;
  }
  console.log("Submitting Appointment:", this.appoinment);
  this.saveappoinment();
}

  gotoappoinment()
  {
    this.router.navigate(['/appointments'])
  }
}
