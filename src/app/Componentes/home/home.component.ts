import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as L from 'leaflet';
import { Empleado } from 'src/app/Clases/empleado';
import { Usuario } from 'src/app/Clases/usuario';
import { EmpleadosService } from 'src/app/Servicios/empleados.service';
import { UsuariosService } from 'src/app/Servicios/usuarios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private fb: FormBuilder,private irHacia:Router, private servicioEmpleado:EmpleadosService,private servicioUsuario:UsuariosService) { }
  
  usuario: Usuario = {}
  entrenadores: Empleado[] = []
  mensaje: any

  formLogin = this.fb.group({
    email: ["",[Validators.required,Validators.email]],
    password: ["",[Validators.required]],
  })

  mymap: any;

  ngOnInit(): void 
  {
    this.obtenerEntrenadores();

    if(this.servicioUsuario.isLogged()){
      
      if(this.usuario.rol == "empleado"){
        this.irHacia.navigate(['/perfilempleado'])
      }
      this.irHacia.navigate(['/ejercicios'])
    }

    
    this.mymap = L.map('mapid').setView([51.505, -0.09], 16)

    L.marker([51.5, -0.09]).addTo(this.mymap);

   const tiles = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
    })

    tiles.addTo(this.mymap)
  }

  login(){
    this.servicioUsuario.login(this.formLogin.value).subscribe(
      respuesta => {
        console.log("Respuesta: "+respuesta.token)
        this.servicioUsuario.guardarToken(respuesta.token)
        this.obtenerUsuario()
        setInterval(() => {
          if(this.usuario.rol == "empleado"){
            this.irHacia.navigate(['/perfilempleado'])
          }
          else{
            this.irHacia.navigate(['/ejercicios'])
          }    
        }, 5000);
      },
      error => {
        console.log(error)
        this.mensaje = error.error.error
      }
    )
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

  obtenerEntrenadores()
  {
    this.servicioEmpleado.entrenadores().subscribe(
      respuesta => {
        this.entrenadores = respuesta
      },
      error => console.log(error)
    )
  }
}
