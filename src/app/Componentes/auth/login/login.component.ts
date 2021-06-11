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
  erroneo: boolean = false

  formLogin = this.fb.group({
    email: ["",[Validators.required,Validators.email]],
    password: ["",[Validators.required]],
  })

  ngOnInit(): void {
    
  }

  login(){
    this.servicioUsuario.login(this.formLogin.value).subscribe(
      async respuesta => {
        this.servicioUsuario.guardarToken(respuesta.token) 
        this.obtenerUsuario()
      },
      error => {
        this.erroneo = true
        this.mensaje = error.error.error
        setTimeout(()=>{this.erroneo = false},6000);
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
