import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appoinment } from './appoinment';

@Injectable({
  providedIn: 'root'
})
export class AppoinmentService {

  constructor( private httpclient:HttpClient) { }
  private baseUrl="http://localhost:8080/api/appoin"

  getallappoinments():Observable<Appoinment[]>
  {
  return this.httpclient.get<Appoinment[]>(`${this.baseUrl}`);
  }

  createappoinment(appoinment:Appoinment):Observable<Appoinment>
  {
    return this.httpclient.post<Appoinment>(`${this.baseUrl}/insert_appoin`,appoinment);
  }

  deleteappointment(id:number):Observable<object>
  {
       return this.httpclient.delete(`${this.baseUrl}/delete_appoin/${id}`);
  }

  
}