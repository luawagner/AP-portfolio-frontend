import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Project } from '../model/project';

@Injectable({
  providedIn: 'root'
})
export class SProjectService {
  URLprod=environment.URL
proURL = this.URLprod + '/projects/'

  constructor(private httpClient: HttpClient) { }
public lista(): Observable<Project[]>{
  return this.httpClient.get<Project[]>(this.proURL + 'lista')
}
public detail(id:number): Observable <Project>{
  return this.httpClient.get<Project>(this.proURL + `detail/${id}`);
}
public save(project: Project): Observable<any>{
  return this.httpClient.post<any>(this.proURL + 'create', project);
}
public update(id:number, project: Project): Observable<any>{
  return this.httpClient.put<any>(this.proURL + `update/${id}`, project);
}
public delete(id:number): Observable<any>{
  return this.httpClient.delete<any>(this.proURL + `delete/${id}`);
}

}
