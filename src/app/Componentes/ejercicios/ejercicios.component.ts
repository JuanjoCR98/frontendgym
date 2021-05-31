import { Component, OnInit } from '@angular/core';
import { Ejercicio } from 'src/app/Clases/ejercicio';
import { Tipoejercicio } from 'src/app/Clases/tipoejercicio';
import { TipoejerciciosService } from 'src/app/Servicios/tipoejercicios.service';

@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.component.html',
  styleUrls: ['./ejercicios.component.css']
})
export class EjerciciosComponent implements OnInit {

  tipoEjercicios: Tipoejercicio[] = []
  ejercicios: Ejercicio[] = []
  
  constructor(private servicioTipoEjercicio:TipoejerciciosService) { }

  ngOnInit(): void {
    this.obtenerTipoEjercicios();
  }

  obtenerTipoEjercicios(){
    this.servicioTipoEjercicio.tipoEjercicios().subscribe(
      respuesta => {
        this.tipoEjercicios = respuesta
      },
      error => console.log(error)
    )
  }
} 