import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { HttpClientModule } from '@angular/common/http';
import { AppoinmentComponent } from './appoinment/appoinment.component';
import { CreateAppoinmentComponent } from './create-appoinment/create-appoinment.component';
import { FormsModule } from '@angular/forms';
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


@NgModule({
  declarations: [
    AppComponent,
    AdmindashComponent,
    AppoinmentComponent,
    CreateAppoinmentComponent,
    HomeComponent,
    DoctorsComponent,
    CreatePatientsComponent,
    MedicineListComponent,
    CreateMedicinesComponent,
    UpdatePatientsComponent,
    ViewPatientsComponent,
    UpdateMedicineComponent,
    DogloginComponent,
    AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  
   
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
