import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/Servicios/usuarios.service';

@Component({
  selector: 'app-headerusuario',
  templateUrl: './headerusuario.component.html',
  styleUrls: ['./headerusuario.component.css']
})
export class HeaderusuarioComponent implements OnInit {

  constructor(private servicioUsuario:UsuariosService,private irHacia:Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.servicioUsuario.logOut()
    this.irHacia.navigate([""])
  }

}
