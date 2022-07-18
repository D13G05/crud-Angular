import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

import { RESTEmployeeResponse, Employee } from '../../interfaces/employee-interfaces';
import { EmployeeService } from '../../services/employee.service';



@Component({
  selector: 'app-find-by-id',
  templateUrl: './find-by-id.component.html',
  styleUrls: ['./find-by-id.component.css']
})
export class FindByIdComponent{


  termino:string = '';
  hayError: boolean = false;
  employee: Employee[] = [];
  aux: Employee[] = [];


  constructor(private employeeService: EmployeeService) { }

  buscar() {
    this.hayError = false;
    console.log(this.termino);

    this.employeeService.buscarEmpleado(this.termino)
    .subscribe( (respuesta) => {
      console.log(respuesta);
      this.employee = respuesta.data;
      
      
      console.log(this.employee);

      this.aux = Object.values(this.employee);
      console.log('->'+this.aux);
      
      
    }, (err) => {
      this.hayError = true;
      this.employee = [];
    });
  }
  

}
