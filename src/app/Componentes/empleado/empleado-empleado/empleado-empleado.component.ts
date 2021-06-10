import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Usuario } from 'src/app/Clases/usuario';
import { UsuariosService } from 'src/app/Servicios/usuarios.service';

@Component({
  selector: 'app-empleado-empleado',
  templateUrl: './empleado-empleado.component.html',
  styleUrls: ['./empleado-empleado.component.css']
})
export class EmpleadoEmpleadoComponent implements OnInit {

  constructor(private fb: FormBuilder,private empleadoService:UsuariosService,private servicioUsuario:UsuariosService) { }

  empleados: Usuario[] = []
  empleadotmp: Usuario = {}
  usuario: Usuario = {}
  user: Usuario = {}
  insertado: boolean = false
  erroneo: boolean = false
  editado: boolean = false
  mensaje: any
  mensajeerr: any =""

  formInsertarEmpleado = this.fb.group({
    email: ["",[Validators.required,Validators.email]],
    password: ["",[Validators.required]],
    nombre: ["",[Validators.required]],
    apellidos: ["",[Validators.required]],
    fecha_nacimiento: ["",[Validators.required]],
    foto: ["",[Validators.required]],
    rol:["empleado"],
    facebook: [""],
    instagram: [""],
    twitter: [""],
  })

  formEditarEmpleado = this.fb.group({
    email: ["",[Validators.email]],
    password: [""],
    nombre: [""],
    apellidos: [""],
    fecha_nacimiento: [""],
    foto: [""],
    rol:["empleado"],
    facebook: [""],
    instagram: [""],
    twitter: [""],
  })

  ngOnInit(): void {
    this.obtenerUsuario()
    this.obtenerEmpleados()
  }

  obtenerUsuario(): void {
    this.servicioUsuario.obtenerUser().subscribe(
      respuesta => {
        this.user = respuesta
        console.log(this.usuario)
      },
      error => console.log(error)
    )
  }

  obtenerEmpleados(): void 
  {
    this.empleadoService.obtenerEmpleados().subscribe(
      respuesta => {
        this.empleados = respuesta
        console.log(this.empleados)
      },
      error => console.log(error)
    )
  }

  vaciarFormulario()
  {
      this.formInsertarEmpleado.controls["email"].setValue("")
      this.formInsertarEmpleado.controls["password"].setValue("")
      this.formInsertarEmpleado.controls["nombre"].setValue("")
      this.formInsertarEmpleado.controls["apellidos"].setValue("")
      this.formInsertarEmpleado.controls["fecha_nacimiento"].setValue("") 
      this.formInsertarEmpleado.controls["foto"].setValue("") 
      this.formInsertarEmpleado.controls["facebook"].setValue("") 
      this.formInsertarEmpleado.controls["instagram"].setValue("") 
      this.formInsertarEmpleado.controls["twitter"].setValue("") 
  }

  insertarEmpleado(empleado:Usuario)
  {
    this.empleadoService.insertarEmpleado(empleado).subscribe(
      respuesta => {
        this.vaciarFormulario()
        this.obtenerEmpleados()
        this.insertado = true
        if(respuesta != ""){
          console.log(respuesta["error"])
          this.mensaje = respuesta.status
          setTimeout(()=>{this.insertado = false},4000);
        }else{
          this.erroneo = true
          console.log(this.erroneo)
          setTimeout(()=>{this.erroneo = false},4000);
        }
        console.log(respuesta)
      },
      error => {
        this.mensajeerr = error.error.error
        this.erroneo = true
        console.log(this.erroneo)
        setTimeout(()=>{this.erroneo = false},4000);
      }
    )
  }

  recogerEmpleado(empleado)
  {
    this.empleadotmp = empleado
  }

  editarEmpleado()
  {
    this.empleadoService.editarEmpleado(this.empleadotmp.id,this.formEditarEmpleado.value).subscribe(
      respuesta => {
        this.vaciarFormulario()
        this.obtenerEmpleados()
        this.editado = true
        this.mensaje = respuesta.status
        setTimeout(()=>{this.editado = false},4000);
      },
      error => {
        this.mensajeerr = error.error.error
        this.erroneo = true
        console.log(this.erroneo)
        setTimeout(()=>{this.erroneo = false},4000);
      }
    )
  }

  borrarEmpleado(id)
  {
    this.empleadoService.borrarUser(id).subscribe(
      respuesta => {
        this.obtenerEmpleados()
        console.log(respuesta)
      },
      error => console.log(error)
    )
  }
}
