import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { API_ENDPOINT_PROVIDER } from 'src/app/providers/tokens';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  url: string;

  constructor(
    private http: HttpClient,
    @Inject(API_ENDPOINT_PROVIDER) private endpoint:any
  ) {
    this.url = `${this.endpoint}/employees`;
  }


  getEmployees(): Observable<any> {
    return this.http.get<any>(`${this.url}/daniela`).pipe(map((v:any)=> v.data.employees));
  }

  updateEmployees(): Observable<any> {
    return this.http.get<any>(`${this.url}/daniela`).pipe(map((v:any)=> v.data.employees));
  }
  
  createEmploye(payload: Employee): Observable<any> {
    return this.http.post<any>(`${this.url}/daniela`, payload);
  }
}
