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

  formInsertarSocio = this.fb.group({
    email: ["",[Validators.required,Validators.email]],
    password: ["",[Validators.required]],
    nombre: ["",[Validators.required]],
    apellidos: ["",[Validators.required]],
    fecha_nacimiento: ["",[Validators.required]],
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
      },
      error => console.log(error)
    )
  }

  insertarSocio(socio:Usuario)
  {
    this.socioService.insertarSocio(socio).subscribe(
      respuesta => {
        this.formInsertarSocio.reset()
        this.obtenerSocios()
        console.log(respuesta)
      },
      error => console.log(error)
    )
  }

}
