import { Component, OnInit } from '@angular/core';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine-list.component.html',
  styleUrls: ['./medicine-list.component.css']
})
export class MedicineListComponent  implements OnInit{

  
  medicines: Medicine[] = [];
  constructor (private medicineservice:MedicineService,private router:Router)
  {

  }

  ngOnInit():void
  {
    this.getMedicine();
  }
  getMedicine()
  {
    this.medicineservice.getmedicines().subscribe(
      data => {
        console.log("API Response:", data); // ✅ Check if 'medicines' is an array
        this.medicines = data;  
      },
      error => {
        console.error("Error fetching medicines:", error);
      }
    );
  }

  update(id:number)
  {
    this.router.navigate(['update-medicine',id])
  }

  delete(id:number)
  {
    this.medicineservice.delete(id).subscribe(data=>{
      console.log(data);
      this.getMedicine();
    })
  }
}
