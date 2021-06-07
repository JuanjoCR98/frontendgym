  
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { Usuario } from 'src/app/Clases/usuario';
import { UsuariosService } from 'src/app/Servicios/usuarios.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  usuario: Usuario = {}

  constructor(private servicioUsuario:UsuariosService) { }

  ngOnInit(): void {
      this.obtenerUsuario()
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
