import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/Servicios/usuarios.service';

@Component({
  selector: 'app-cabecera-ejercicios',
  templateUrl: './cabecera-ejercicios.component.html',
  styleUrls: ['./cabecera-ejercicios.component.css']
})
export class CabeceraEjerciciosComponent implements OnInit {

  constructor(private servicioUsuario:UsuariosService,private irHacia:Router) { }

  ngOnInit(): void {
  }

  doLogout(){
    this.servicioUsuario.logOut()
    this.irHacia.navigate([""])
  }
}
