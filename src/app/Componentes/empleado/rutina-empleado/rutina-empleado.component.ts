import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Rutina } from 'src/app/Clases/rutina';
import { Usuario } from 'src/app/Clases/usuario';
import { RutinasService } from 'src/app/Servicios/rutinas.service';
import { UsuariosService } from 'src/app/Servicios/usuarios.service';

@Component({
  selector: 'app-rutina-empleado',
  templateUrl: './rutina-empleado.component.html',
  styleUrls: ['./rutina-empleado.component.css']
})
export class RutinaEmpleadoComponent implements OnInit {

  constructor(private fb: FormBuilder,private rutinaService:RutinasService,private socioService:UsuariosService) { }

  rutinas: Rutina[] = []
  selectedOption: any
  rutinatmp: Rutina = {}
  socios: Usuario[] = []
  id_usuario: any

  formInsertarRutina = this.fb.group({
    nombre: ["",[Validators.required]],
    usuario:[""]
  })

  formEditarRutina = this.fb.group({
    nombre: [""]
  })

  ngOnInit(): void {
    this.obtenerSocios()
    this.obtenerRutinas()
  }

  callType(id){
    console.log(id)
    this.id_usuario = id
   // this.id_usuario=this.formInsertarRutina.controls["socioselect"].value;
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

  obtenerRutinas(): void 
  {
    this.rutinaService.rutinas().subscribe(
      respuesta => {
        this.rutinas = respuesta
        console.log(this.rutinas)
      },
      error => console.log(error)
    )
  }

  insertarRutina()
  {
    this.rutinaService.insertarRutina(this.formInsertarRutina.value).subscribe(
      respuesta => {
        this.formInsertarRutina.reset()
        this.obtenerRutinas()
        console.log(respuesta)
      },
      error => console.log(error)
    )
  }

  recogerRutina(rutina)
  {
    this.rutinatmp = rutina
  }

  editarRutina()
  {
    this.rutinaService.editarRutina(this.rutinatmp.id,this.rutinatmp).subscribe(
      respuesta => {
        this.formEditarRutina.reset()
        this.obtenerRutinas()
        console.log(respuesta)
      },
      error => console.log(error)
    )
  }

  borrarRutina(id)
  {
    this.rutinaService.borrarRutina(id).subscribe(
      respuesta => {
        this.obtenerRutinas()
        console.log(respuesta)
      },
      error => console.log(error)
    )
  }

}
