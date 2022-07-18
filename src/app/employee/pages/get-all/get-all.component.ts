import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../../interfaces/employee-interfaces';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-get-all',
  templateUrl: './get-all.component.html',
  styleUrls: ['./get-all.component.css']
})
export class GetAllComponent{

  hayError: boolean = false;
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) { }


  buscar() {
    this.hayError = false;

    this.employeeService.GetIssues().subscribe((respuesta)=>{
      
      this.employees = respuesta.data;
      console.log(respuesta);
    
    }, (err) => {
      this.hayError = true;
      this.employees = [];
    });

  }

}
