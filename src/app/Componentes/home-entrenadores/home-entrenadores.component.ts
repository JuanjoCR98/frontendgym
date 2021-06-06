import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/Clases/empleado';
import { EmpleadosService } from 'src/app/Servicios/empleados.service';
import { UsuariosService } from 'src/app/Servicios/usuarios.service';

@Component({
  selector: 'app-home-entrenadores',
  templateUrl: './home-entrenadores.component.html',
  styleUrls: ['./home-entrenadores.component.css']
})
export class HomeEntrenadoresComponent implements OnInit {

  entrenadores: Empleado[] = []
  constructor(private servicioUsuario:UsuariosService) { }

  ngOnInit(): void {
    this.obtenerEntrenadores();
  }

  obtenerEntrenadores()
  {
    this.servicioUsuario.obtenerEmpleados().subscribe(
      respuesta => {
        this.entrenadores = respuesta
        console.log(this.entrenadores)
      },
      error => console.log(error)
    )
  }
}
