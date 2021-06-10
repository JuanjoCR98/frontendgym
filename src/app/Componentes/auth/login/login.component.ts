import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Clases/usuario';
import { UsuariosService } from 'src/app/Servicios/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private servicioUsuario:UsuariosService,private fb: FormBuilder,private irHacia:Router,) { }

  mensaje: any
  usuario: Usuario = {}

  formLogin = this.fb.group({
    email: ["",[Validators.required,Validators.email]],
    password: ["",[Validators.required]],
  })

  ngOnInit(): void {
    
  }

  login(){
    this.servicioUsuario.login(this.formLogin.value).subscribe(
      async respuesta => {
        console.log("Respuesta: "+respuesta.token)
        this.servicioUsuario.guardarToken(respuesta.token) 
        this.obtenerUsuario()
      },
      error => {
        console.log(error.error.error)
        this.mensaje = error.error.error
      }
    )
  }

  obtenerUsuario(): void {
    this.servicioUsuario.obtenerUser().subscribe(
      respuesta => {
        this.usuario = respuesta
        if(this.usuario.rol == "empleado"){
          this.irHacia.navigate(['/empleadoempleado'])
        }
        else if(this.usuario.rol == "socio"){
          this.irHacia.navigate(['/ejercicios'])
        } 
        console.log(this.usuario)
      },
      error => console.log(error)
    )
  }
}
