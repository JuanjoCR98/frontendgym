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

    if(this.servicioUsuario.isLogged()){
      this.irHacia.navigate(['/ejercicios'])
     /* this.obtenerUsuario()
      setInterval(() => {
        if(this.usuario.rol == "empleado"){
          this.irHacia.navigate(['/perfilempleado'])
        }
        else{
          this.irHacia.navigate(['/ejercicios'])
        }    
      }, 3000);*/
    }
  }

  login(){
    this.servicioUsuario.login(this.formLogin.value).subscribe(
      respuesta => {
        console.log("Respuesta: "+respuesta.token)
        this.servicioUsuario.guardarToken(respuesta.token)
       // this.obtenerUsuario()
       this.irHacia.navigate(['/ejercicios'])
        /*setInterval(() => {
          if(this.usuario.rol == "empleado"){
            this.irHacia.navigate(['/perfilempleado'])
          }
          else{
            this.irHacia.navigate(['/ejercicios'])
          }    
        }, 5000);*/
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
