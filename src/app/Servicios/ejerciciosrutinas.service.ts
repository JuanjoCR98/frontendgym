import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const url = "http://127.0.0.1:8000/ejercicios/rutina"


@Injectable({
  providedIn: 'root'
})
export class EjerciciosrutinasService {

  constructor(private http:HttpClient) { }

  ejerciciosRutina($id): Observable<any>{
    return this.http.get(url+"/"+$id)
  }
}
