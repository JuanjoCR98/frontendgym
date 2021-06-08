import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estadistica } from '../Clases/estadistica';

const url = "http://127.0.0.1:8000/estadistica/"

@Injectable({
  providedIn: 'root'
})
export class EstadisticasService {

  constructor(private http:HttpClient) { }

  insertarEstadistica(estadistica:Estadistica): Observable<any>{
    return this.http.post(url+"socio",estadistica)
  }
}
