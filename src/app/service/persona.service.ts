import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URLprod = environment.URL
URL = this.URLprod + '/personas/';
constructor(private httpClient : HttpClient) { }


public lista(): Observable<persona[]>{
  return this.httpClient.get<persona[]>(this.URL + 'lista');
}

public detail(id: number): Observable<persona>{
  return this.httpClient.get<persona>(this.URL + `detail/${id}`);
}
/*
public save(persona: Persona): Observable<any>{
  return this.httpClient.post<any>(this.URL + 'create', persona);
}*/

public update(id: number, Persona: persona): Observable<any>{
  return this.httpClient.put<any>(this.URL + `update/${id}`, Persona);
}
/*
public delete(id: number): Observable<any>{
  return this.httpClient.delete<any>(this.URL + `delete/${id}`);
}*/
}
