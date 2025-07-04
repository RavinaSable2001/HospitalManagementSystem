import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PatientClass } from './patient-class';

@Injectable({
  providedIn: 'root'
})
export class PatientServiceService {

  constructor(private httpclient:HttpClient) { }
  private baseUrl="http://localhost:8080/api/patients"

  getPatientList():Observable<PatientClass[]>
  {
    return this.httpclient.get<PatientClass[]>(`${this.baseUrl}/get_patients`) ;//calling rest api
  }

  delete(id:number):Observable<object>
  {
    return this.httpclient.delete(`${this.baseUrl}/delete_patients/${id}`);
  }

  createpatients(patient:PatientClass):Observable<PatientClass>
  {
      return this.httpclient.post<PatientClass>(`${this.baseUrl}/insert`,patient);
  }

  getPatientById(id: number): Observable<PatientClass> {
    return this.httpclient.get<PatientClass>(`${this.baseUrl}/patients/${id}`);
  }

  updatePatient(id: number, patient: PatientClass): Observable<Object> {
    return this.httpclient.put(`${this.baseUrl}/update_patients/${id}`, patient);
  }
  
  
}
