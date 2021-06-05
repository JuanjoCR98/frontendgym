import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Usuario } from 'src/app/Clases/usuario';
import { UsuariosService } from 'src/app/Servicios/usuarios.service';

@Component({
  selector: 'app-perfil-empleado',
  templateUrl: './perfil-empleado.component.html',
  styleUrls: ['./perfil-empleado.component.css']
})
export class PerfilEmpleadoComponent implements OnInit {

  usuario: Usuario = {}

  constructor(private fb:FormBuilder, private servicioUsuario:UsuariosService) { }

  formEditEmpleado = this.fb.group({
    email: ["", [Validators.email]],
    password: [""],
    nombre: [""],
    apellidos: [""],
    fecha_nac: [""],
    usuario: [""],
    foto: [""],
    instagram: [""],
    facebook: [""],
    twitter: [""]
  })
  
  ngOnInit(): void {
    this.obtenerUsuario()
  }

  editarEmpleado(){
    
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
