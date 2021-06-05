import { Component, OnInit } from '@angular/core';
import { Ejerciciosrutina } from 'src/app/Clases/ejerciciosrutina';
import { Rutina } from 'src/app/Clases/rutina';
import { EjerciciosrutinasService } from 'src/app/Servicios/ejerciciosrutinas.service';
import { RutinasService } from 'src/app/Servicios/rutinas.service';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { UsuariosService } from 'src/app/Servicios/usuarios.service';
import { Usuario } from 'src/app/Clases/usuario';

@Component({
  selector: 'app-rutinas',
  templateUrl: './rutinas.component.html',
  styleUrls: ['./rutinas.component.css']
})
export class RutinasComponent implements OnInit {

  rutinas: Rutina[] = []
  usuario: Usuario = {}
  ejerciciosRutina: Ejerciciosrutina[] = []

  constructor(private servicioRutina:RutinasService,private ejercicioRutina:EjerciciosrutinasService,private servicioUsuario:UsuariosService) { }

  ngOnInit(): void {
    this.obtenerUsuario()
  }

  obtenerUsuario(): void 
  {
    this.servicioUsuario.obtenerUser().subscribe(
      respuesta => {
        this.usuario = respuesta
        this.obtenerRutinas(this.usuario.id)
      },
      error => console.log(error)
    )
  }

  obtenerRutinas(id)
  {
    this.servicioRutina.rutinasUsuario(id).subscribe(
      respuesta => {
        this.rutinas = respuesta
      },
      error => console.log(error)
    )
  }

  ejerciciosRutinas(id){
    this.ejercicioRutina.ejerciciosRutina(id).subscribe(
      respuesta => {
        this.ejerciciosRutina = respuesta
        console.log(respuesta)
      },
      error => console.log(error)
    )
  }

  generatePDF($titulo) {
    var data = document.getElementById('table');
    html2canvas(data).then(canvas => {
      var imgWidth = 208;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jspdf.jsPDF('p', 'mm', 'a4');
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      pdf.save($titulo+'.pdf');
    });
  }
}
