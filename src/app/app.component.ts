import { Component } from '@angular/core';
import { argv } from 'process';

import { Empleados } from './models/empleados';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  empleadoArray: Empleados[] = [
    {id: 1, name: "George", phone: 8296767667,  address:"av. churchill" },
    {id: 2, name: "Bebe", phone: 8295555555,  address:"av. sarasota" },
    {id: 3, name: "Toño", phone: 8297777777,  address:"av. Lincoln" }
  ];

  empleadoSeleccionado: Empleados = new Empleados();

 openForEdit(empleados : Empleados){
   this.empleadoSeleccionado = empleados; 
 };

  addOrEdit(){
    this.empleadoSeleccionado.id = this.empleadoArray.length + 1;
    this.empleadoArray.push(this.empleadoSeleccionado);
    this.empleadoSeleccionado = new Empleados();
  };

  

  
}
