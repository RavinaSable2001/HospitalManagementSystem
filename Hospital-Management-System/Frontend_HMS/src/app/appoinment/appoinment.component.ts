import { Component } from '@angular/core';
import { AppoinmentService } from '../appoinment.service';
import { Appoinment } from '../appoinment';

@Component({
  selector: 'app-appoinment',
  templateUrl: './appoinment.component.html',
  styleUrls: ['./appoinment.component.css']
})
export class AppoinmentComponent {
  
  appoinments:Appoinment[]=[];
  constructor(private appoinmentservice:AppoinmentService){}

    ngOnInit():void
    {
      this.getappoinments();
    }
    getappoinments()
    {
      this.appoinmentservice.getallappoinments().subscribe(data=>{

        this.appoinments=data;

      })

    
    }
    

    delete(id: number) {
      if (confirm("Are you sure you want to delete this appointment?")) {
        this.appoinmentservice.deleteappointment(id).subscribe(
          data => {
            console.log("Deleted successfully:", data);
            this.getappoinments(); // Refresh the list after deletion
          },
          error => {
            console.error("Error deleting appointment:", error);
          }
        );
      }
    }
    
    }
  

