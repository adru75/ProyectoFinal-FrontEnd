import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { persona } from '../model/persona.model';


@Injectable({
  providedIn: 'root'
})
export class PorfolioService {

  URL = environment.URL + 'personas/';

  constructor(private http:HttpClient) { }



  public getPersona(): Observable<persona> {
    return this.http.get<persona>(this.URL+'traer');
  }

/*  masterclass usando un json como base de datos.
  obtenerDatos():Observable<any> {
    return this.http.get('./assets/data/data.json');
  }
*/  
}

