import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Formation } from '../../classes/formation';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  url = environment.url + 'formation' ;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Formation[]> {
    return this.http.get<Formation[]>(this.url);
  }

  getByEmploye(id: number): Observable<Formation[]> {
    return this.http.get<Formation[]>(this.url + '/' + id);
  }

  answer(formation: Formation): Observable<void> {
    return this.http.put<void>(this.url, formation);
  }
  add(formation: Formation): Observable<Formation> {
    return this.http.post<Formation>(this.url , formation);
  }
}
