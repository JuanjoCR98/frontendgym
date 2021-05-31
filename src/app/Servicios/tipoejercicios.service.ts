import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const url = "http://127.0.0.1:8000/tipo_ejercicio"

@Injectable({
  providedIn: 'root'
})
export class TipoejerciciosService {

  constructor(private http:HttpClient) { }

  tipoEjercicios(): Observable<any>{
    return this.http.get(url+"/ejercicios")
  }
}
