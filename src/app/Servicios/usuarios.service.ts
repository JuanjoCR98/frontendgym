import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { accesoUsuario, Usuario } from '../Clases/usuario';


const url = "http://127.0.0.1:8000/usuario"

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http:HttpClient) { }

  login(usuario:accesoUsuario): Observable<any>{
    return this.http.post(url+"/login",usuario)
  }

  guardarToken(respuesta:string){
    localStorage.setItem('tokenUsuario', respuesta)
  }

  editarPerfil(perfil:Usuario): Observable<any>{
    return this.http.put(url,perfil)
  }

  obtenerUser(): Observable<any>{
    return this.http.get(url)
  }

  obtenerSocios(): Observable<any>{
    return this.http.get(url+"/socios")
  }

  insertarSocio(socio:Usuario): Observable<any>{
    return this.http.post(url+"/registrar",socio)
  }

  isLogged(): boolean{
    return !!localStorage.getItem("tokenUsuario")
  }
  logOut(){
    localStorage.removeItem("tokenUsuario")
  }

  leerToken(): string{
    return localStorage.getItem("tokenUsuario")
  }
}
