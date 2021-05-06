import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Projet} from '../../classes/projet';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  url = environment.url + 'employes/projet' ;

  constructor(private http: HttpClient) { }

  loadProjets(): Observable<Projet[]> {
    return this.http.get<Projet[]>(this.url);
  }

  getByEmploye(id: number): Observable<Projet[]> {
    return this.http.get<Projet[]>(this.url + '/' + id);
  }

  add(projet: Projet, id: number): Observable<Projet> {
    return this.http.post<Projet>(this.url + '/' + id , projet);
  }

}
