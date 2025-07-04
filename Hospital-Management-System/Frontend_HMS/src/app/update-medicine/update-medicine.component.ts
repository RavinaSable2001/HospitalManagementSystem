import { Component } from '@angular/core';
import { Medicine } from '../medicine';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicineService } from '../medicine.service';

@Component({
  selector: 'app-update-medicine',
  templateUrl: './update-medicine.component.html',
  styleUrls: ['./update-medicine.component.css']
})
export class UpdateMedicineComponent {

  medicine:Medicine=new Medicine();
  id:number=0;
  constructor(private route:ActivatedRoute,private medicineservice:MedicineService,private router:Router)
  {
    

  }
  ngOnInit():void{
    this.id=this.route.snapshot.params['id'];
    this.medicineservice.getMedicineById(this.id).subscribe(data=>{
      this.medicine=data;

    })
    
  }
  onSubmit()
  {
     this.medicineservice.updateMedicine(this.id,this.medicine).subscribe(data=>{
      console.log(data);
      this.goTomedicineList();
     })
  }

  goTomedicineList()
  {
    this.router.navigate(['view-medicine'])
  }

}
