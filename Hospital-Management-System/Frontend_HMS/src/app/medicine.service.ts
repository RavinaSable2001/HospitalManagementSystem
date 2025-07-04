import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicine } from './medicine';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {
  medicines:Medicine[]=[];
  constructor(private httpClient:HttpClient) { 

  }
  private baseUrl="http://localhost:8080/api/medicine";

  getmedicines(): Observable<Medicine[]> {
    return this.httpClient.get<Medicine[]>(`${this.baseUrl}/get_all_medicine`);
  }

  createMedicine(medicine:Medicine):Observable<Medicine>
  {
    return this.httpClient.post<Medicine>(`${this.baseUrl}/insert_medicine`,medicine);
  }

  getMedicineById(id:number):Observable<Medicine>
  {
         return this.httpClient.get<Medicine>(`${this.baseUrl}/medicine_byId/${id}`);
  }

  updateMedicine(id:number,medicine:Medicine):Observable<object>
  {
    return this.httpClient.put<Medicine>(`${this.baseUrl}/update_medicine/${id}`,medicine);
  }

  delete(id: number): Observable<object> {
    return this.httpClient.delete(`${this.baseUrl}/medicine_delete/${id}`);
  }
  
}


