import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const url = "http://127.0.0.1:8000/rutina/"

@Injectable({
  providedIn: 'root'
})
export class RutinasService {

  constructor(private http:HttpClient) { }

  
  rutinas(): Observable<any>{
    return this.http.get(url)
  }

  rutinasUsuario(id): Observable<any>{
    return this.http.get(url + "usuario/"+id)
  }
}
