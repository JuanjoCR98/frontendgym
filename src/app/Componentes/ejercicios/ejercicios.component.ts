import { Component, OnInit } from '@angular/core';
import { Ejercicio } from 'src/app/Clases/ejercicio';
import { Tipoejercicio } from 'src/app/Clases/tipoejercicio';
import { EjerciciosService } from 'src/app/Servicios/ejercicios.service';
import { TipoejerciciosService } from 'src/app/Servicios/tipoejercicios.service';

@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.component.html',
  styleUrls: ['./ejercicios.component.css']
})
export class EjerciciosComponent implements OnInit {

  tipoEjercicios: Tipoejercicio[] = []
  ejer: Ejercicio = new Ejercicio
  mostrarModal: boolean = false
  
  constructor(private servicioTipoEjercicio:TipoejerciciosService,private servicioEjercicio:EjerciciosService) { }

  ngOnInit(): void {
    this.obtenerTipoEjercicios()
  }

 obtenerId($id){
  this.servicioEjercicio.verEjercicio($id).subscribe(
    respuesta => {
      this.ejer = respuesta
      console.log(respuesta)
      this.mostrarModal = true
    },
    error => console.log(error)
  )
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