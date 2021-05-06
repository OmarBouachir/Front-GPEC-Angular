import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Conge } from '../../classes/conge';

@Injectable({
  providedIn: 'root'
})
export class CongeService {

  url = environment.url + 'conges' ;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Conge[]> {
    return this.http.get<Conge[]>(this.url);
  }

  getByEmploye(id: number): Observable<Conge[]> {
    return this.http.get<Conge[]>(this.url + '/' + id);
  }

  answer(conge: Conge): Observable<void> {
    return this.http.put<void>(this.url, conge);
  }

  add(conge: Conge): Observable<Conge> {
    return this.http.post<Conge>(this.url , conge);
  }
}
