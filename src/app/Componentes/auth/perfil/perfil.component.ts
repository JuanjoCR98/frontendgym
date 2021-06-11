  
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
  sociotmp: Usuario = {}
  insertado:boolean = false
  erroneo:boolean = false
  editado:boolean = false
  mensaje: any

  constructor(private servicioUsuario:UsuariosService,private servicioEstadistica:EstadisticasService,private fb: FormBuilder) { }

  formEstadistica = this.fb.group({
    peso:[""],
    altura:[""],
    usuario:[this.usuario.id]
  })

  formEditarSocio = this.fb.group({
    email: ["",[Validators.email]],
    password: [""],
    nombre: [""],
    apellidos: [""],
    fecha_nacimiento: [""],
    rol:["socio"]
  })

  ngOnInit(): void {
      this.insertado = false
      this.erroneo = false
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
        this.insertado = true
          this.mensaje = respuesta.status
          setTimeout(()=>{this.insertado = false},6000);    
      },
      error => {
        console.log(error)
        this.erroneo = true
        this.mensaje = error.error.error
        setTimeout(()=>{this.erroneo = false},6000);
      }
    )
  }

  recogerSocio(socio)
  {
    this.sociotmp = socio
  }

  editarSocio()
  {
    this.servicioUsuario.editarSocio(this.sociotmp.id,this.formEditarSocio.value).subscribe(
      respuesta => {
        this.obtenerUsuario()
        this.editado = true
        this.mensaje = respuesta.status
         setTimeout(()=>{this.editado = false},6000);    
      },
      error => {
        this.erroneo = true
        this.mensaje = error.error.error
        setTimeout(()=>{this.erroneo = false},6000);
      }
    )
  }
}
