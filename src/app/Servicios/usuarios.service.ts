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

  async obtenerUsuarioLogueado(){
    let usuario = await this.http.get(url)
    return usuario;
  }

  obtenerSocios(): Observable<any>{
    return this.http.get(url+"/socios")
  }

  insertarSocio(socio:Usuario): Observable<any>{
    return this.http.post(url+"/registrar",socio)
  }

  editarSocio(id,socio:Usuario): Observable<any>{
    return this.http.put(url+"/socio/"+id,socio)
  }

  borrarUser(id): Observable<any>{
    return this.http.delete(url+"/user/"+id)
  }

  obtenerEmpleados(): Observable<any>{
    return this.http.get(url+"/empleados")
  }

  insertarEmpleado(empleado:Usuario): Observable<any>{
    return this.http.post(url+"/registrar",empleado)
  }

  editarEmpleado(id,empleado:Usuario): Observable<any>{
    return this.http.put(url+"/empleado/"+id,empleado)
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
