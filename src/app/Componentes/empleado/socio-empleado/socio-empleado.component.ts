import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Usuario } from 'src/app/Clases/usuario';
import { UsuariosService } from 'src/app/Servicios/usuarios.service';

@Component({
  selector: 'app-socio-empleado',
  templateUrl: './socio-empleado.component.html',
  styleUrls: ['./socio-empleado.component.css']
})
export class SocioEmpleadoComponent implements OnInit {

  constructor(private fb: FormBuilder,private socioService:UsuariosService) { }

  socios: Usuario[] = []
  sociotmp: Usuario = {}

  formInsertarSocio = this.fb.group({
    email: ["",[Validators.required,Validators.email]],
    password: ["",[Validators.required]],
    nombre: ["",[Validators.required]],
    apellidos: ["",[Validators.required]],
    fecha_nacimiento: ["",[Validators.required]],
    rol:["socio"]
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
    this.obtenerSocios()
  }

  obtenerSocios(): void 
  {
    this.socioService.obtenerSocios().subscribe(
      respuesta => {
        this.socios = respuesta
        console.log(this.socios)
      },
      error => console.log(error)
    )
  }

  insertarSocio(socio:Usuario)
  {
    this.socioService.insertarSocio(socio).subscribe(
      respuesta => {
        this.obtenerSocios()
        this.vaciarFormulario()
        console.log(respuesta)
      },
      error => console.log(error)
    )
  }

  vaciarFormulario()
  {
      this.formInsertarSocio.controls["email"].setValue("")
      this.formInsertarSocio.controls["password"].setValue("")
      this.formInsertarSocio.controls["nombre"].setValue("")
      this.formInsertarSocio.controls["apellidos"].setValue("")
      this.formInsertarSocio.controls["fecha_nacimiento"].setValue("") 
  }

  recogerSocio(socio)
  {
    this.sociotmp = socio
  }

  editarSocio()
  {
    this.socioService.editarSocio(this.sociotmp.id,this.formEditarSocio.value).subscribe(
      respuesta => {
        this.vaciarFormulario()
        this.obtenerSocios()
        console.log(respuesta)
      },
      error => {
        console.log(error)
      }
    )
  }

  borrarSocio(id)
  {
    this.socioService.borrarUser(id).subscribe(
      respuesta => {
        this.obtenerSocios()
        console.log(respuesta)
      },
      error => console.log(error)
    )
  }

}
