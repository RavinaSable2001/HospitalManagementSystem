import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { combineLatest } from 'rxjs';
import { AdmindashComponent } from './admindash/admindash.component';
import { AppoinmentComponent } from './appoinment/appoinment.component';
import { CreateAppoinmentComponent } from './create-appoinment/create-appoinment.component';
import { HomeComponent } from './home/home.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { CreatePatientsComponent } from './create-patients/create-patients.component';
import { MedicineListComponent } from './medicine-list/medicine-list.component';
import { CreateMedicinesComponent } from './create-medicines/create-medicines.component';
import { UpdatePatientsComponent } from './update-patients/update-patients.component';
import { ViewPatientsComponent } from './view-patients/view-patients.component';
import { UpdateMedicineComponent } from './update-medicine/update-medicine.component';
import { DogloginComponent } from './doglogin/doglogin.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminAuthguardService } from './admin-authguard.service';
import { DocauthguardService } from './docauthguard.service';

const routes: Routes = [
 {path:"admin" ,component:AdmindashComponent,canActivate:[AdminAuthguardService]},
 { path: 'appointments', component:AppoinmentComponent ,canActivate:[AdminAuthguardService]}, // Add this route
 {path:'create-appoinments',component:CreateAppoinmentComponent,canActivate:[AdminAuthguardService]},
 {path:'home',component:HomeComponent},
 {path:'',redirectTo:'home',pathMatch:'full'},
 {path:'doclogin',component:DoctorsComponent,canActivate:[DocauthguardService]},
 {path:'create-patients',component:CreatePatientsComponent,canActivate:[DocauthguardService]},
 {path:'view-medicine',component:MedicineListComponent,canActivate:[DocauthguardService]},
 {path:'create_medicine',component:CreateMedicinesComponent,canActivate:[DocauthguardService]},
 {path:'update-patient/:id',component:UpdatePatientsComponent,canActivate:[DocauthguardService]},
 {path:'view_patients/:id',component:ViewPatientsComponent,canActivate:[DocauthguardService]},
 {path:'update-medicine/:id',component:UpdateMedicineComponent,canActivate:[DocauthguardService]},
 {path:'doctor_login',component:DogloginComponent},
 {path:'admin-login',component:AdminLoginComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
