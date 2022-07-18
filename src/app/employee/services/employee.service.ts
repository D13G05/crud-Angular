import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, retry } from 'rxjs';
import { Employee, RESTEmployeeResponse } from '../interfaces/employee-interfaces';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl: string = 'https://dummy.restapiexample.com/api/v1';

  constructor(private http: HttpClient) { }

  buscarEmpleado(termino: string): Observable<RESTEmployeeResponse>{
    
    const url = `${this.apiUrl}/employee/${termino}`;

    return this.http.get<RESTEmployeeResponse>(url);
  }

  GetIssues(): Observable<RESTEmployeeResponse> {
    
    const url = `${this.apiUrl}/employees`;

    return this.http.get<RESTEmployeeResponse>(url);
  }

}
