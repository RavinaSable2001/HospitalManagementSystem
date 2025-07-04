import { Component } from '@angular/core';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-medicines',
  templateUrl: './create-medicines.component.html',
  styleUrls: ['./create-medicines.component.css']
})
export class CreateMedicinesComponent {

  medicine:Medicine=new Medicine();
  constructor(private medicineService:MedicineService,private router:Router)
  {
  }

  saveMedicine()
  {
           
       this.medicineService.createMedicine(this.medicine).subscribe(data=>{
        console.log("Medicine added successfully:", data);
        alert("Medicine Added!");
        this.goToViewMedicine();
       },
       error => {
        console.error("Error adding medicine:", error);
      });
     
  }

  onSubmit()
  {
     this.saveMedicine();
  }

  goToViewMedicine()
  {
    this.router.navigate(['/view-medicine'])
  }
}
