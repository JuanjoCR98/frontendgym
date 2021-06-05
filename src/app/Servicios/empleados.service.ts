import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const url = "http://127.0.0.1:8000/empleado/"

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor(private http:HttpClient) { }
 
  entrenadores(): Observable<any>{
    return this.http.get(url+"entrenadores")
  }
}
