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

  mensaje: any

  formLogin = this.fb.group({
    email: ["",[Validators.required,Validators.email]],
    password: ["",[Validators.required]],
  })

  mymap: any;

  ngOnInit(): void 
  {
    var map = L.map('mapid').setView([39.391645827098316, -3.221972775300358], 16);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    L.marker([39.391645827098316, -3.221972775300358]).addTo(map)
        .bindPopup('NO LIMITS')
        .openPopup();
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

  
}
