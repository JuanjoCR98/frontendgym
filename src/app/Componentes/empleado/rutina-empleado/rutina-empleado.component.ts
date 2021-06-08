import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Ejercicio } from 'src/app/Clases/ejercicio';
import { Rutina } from 'src/app/Clases/rutina';
import { Usuario } from 'src/app/Clases/usuario';
import { EjerciciosService } from 'src/app/Servicios/ejercicios.service';
import { RutinasService } from 'src/app/Servicios/rutinas.service';
import { UsuariosService } from 'src/app/Servicios/usuarios.service';

@Component({
  selector: 'app-rutina-empleado',
  templateUrl: './rutina-empleado.component.html',
  styleUrls: ['./rutina-empleado.component.css']
})
export class RutinaEmpleadoComponent implements OnInit {

  constructor(private fb: FormBuilder,private rutinaService:RutinasService,private socioService:UsuariosService,private ejercicioService:EjerciciosService) { }

  rutinas: Rutina[] = []
  ejercicios: Ejercicio[] = []
  selectedOption: any
  rutinatmp: Rutina = new Rutina()
  socios: Usuario[] = []
  id_usuario: any

  formInsertarRutina = this.fb.group({
    nombre: ["",[Validators.required]],
    usuario:[""],
    ejerciciosrutina: this.fb.array([])
  })

  formEditarRutina = this.fb.group({
    nombre: [""],
    usuario:[""]
  })

  ngOnInit(): void {
    this.obtenerSocios()
    this.obtenerRutinas()
    this.obtenerEjercicios()
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

  obtenerEjercicios(): void 
  {
    this.ejercicioService.verEjercicios().subscribe(
      respuesta => {
        this.ejercicios = respuesta
        console.log(this.rutinas)
      },
      error => console.log(error)
    )
  }

  insertarRutina()
  {
    this.rutinaService.insertarRutina(this.formInsertarRutina.value).subscribe(
      respuesta => {
        this.vaciarFormulario()
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

  vaciarFormulario()
  {
      this.formInsertarRutina.controls["nombre"].setValue("")
  }

  onChange(id:number, isChecked: boolean) {
    const ejercicioFormArray = <FormArray>this.formInsertarRutina.controls.ejerciciosrutina ;
  
    if(isChecked) {
      ejercicioFormArray.push(new FormControl(identifierModuleUrl));
    } else {
      let index = ejercicioFormArray.controls.findIndex(x => x.value == id)
      ejercicioFormArray.removeAt(index);
    }
  }
}
