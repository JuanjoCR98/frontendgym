  
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Chart } from 'chart.js';
import { Usuario } from 'src/app/Clases/usuario';
import { EstadisticasService } from 'src/app/Servicios/estadisticas.service';
import { UsuariosService } from 'src/app/Servicios/usuarios.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  usuario: Usuario = {}
  abierto: boolean = false;

  constructor(private servicioUsuario:UsuariosService,private servicioEstadistica:EstadisticasService,private fb: FormBuilder) { }

  formEstadistica = this.fb.group({
    peso:[""],
    altura:[""],
    usuario:[this.usuario.id]
  })

  ngOnInit(): void {
      this.obtenerUsuario()
  }

  obtenerUsuario(): void {
    this.servicioUsuario.obtenerUser().subscribe(
      respuesta => {
        this.usuario = respuesta
        console.log(this.usuario)
      },
      error => console.log(error)
    )
  }

  insertarEstadistica(): void {
    this.servicioEstadistica.insertarEstadistica(this.formEstadistica.value).subscribe(
      respuesta => {
        this.obtenerUsuario()
        console.log(this.usuario)
      },
      error => console.log(error)
    )
  }

  abrir(){
    this.abierto = false;
  }

  calcularEstadistica(){
    this.abierto = false;
  }
}
