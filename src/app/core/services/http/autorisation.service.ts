import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Autorisation } from '../../classes/autorisation';

@Injectable({
  providedIn: 'root'
})
export class AutorisationService {

  url = environment.url + 'autorisation' ;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Autorisation[]> {
    return this.http.get<Autorisation[]>(this.url);
  }

  getByEmploye(id: number): Observable<Autorisation[]> {
    return this.http.get<Autorisation[]>(this.url + '/' + id);
  }

  answer(autorisation: Autorisation): Observable<void> {
    return this.http.put<void>(this.url, autorisation);
  }

  add(autorisation: Autorisation): Observable<Autorisation> {
    return this.http.post<Autorisation>(this.url , autorisation);
  }
}
