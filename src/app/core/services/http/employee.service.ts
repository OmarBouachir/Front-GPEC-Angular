import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employe} from '../../classes/employe';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url = environment.url + 'employes' ;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Employe[]> {
    return this.http.get<Employe[]>(this.url);
  }

  add(employee: Employe): Observable<Employe> {
    return this.http.post<Employe>(this.url , employee);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(this.url + "/" + id );
  }

  update(employee: Employe): Observable<Employe> {
    return this.http.put<Employe>(this.url , employee);
  }
}
