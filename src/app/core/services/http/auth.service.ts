import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router} from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../../classes/user';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = environment.url + 'auth' ;

  private isAuthenticated = false;
  private token: string;
  private user: any ;
  private tokenTimer: any;
  // private authStatusListener = new Subject<boolean>();

  constructor(private http: HttpClient, private router: Router) {}

  signup(user: User): Observable<User[]> {
    return this.http.post<User[]>(this.url + '/signup' , user);
  }

  login(username: string, password: string)  {
    return this.http.post<{ jwt: any , id: string , role: string }>(this.url + "/login", { username: username, password: password })
  }

  logout() {
    localStorage.clear()
    this.router.navigate(['/']);
  }

  saveAuthData(token: string, id: string , role: string) {
    localStorage.setItem("token", token);
    localStorage.setItem("id" , id);
    localStorage.setItem("role" , role);
  }

  getUserId() {
    return localStorage.getItem("id")
  }

  getUserRole() {
    return localStorage.getItem("role")

  }
  // getToken() {
 //    return this.token;
 //  }
 //
 //  setToken( token : string){
 //    this.token = token ;
 //  }
 //
 //  getUser() {
 //    return this.user ;
 //  }
 //
 //  setUser(user : any){
 //    this.user = user ;
 //  }
 //
 //  setIsAuthenticated(res : boolean){
 //    this.isAuthenticated = res ;
 //  }
 //
 //  getIsAuth() {
 //    return this.isAuthenticated;
 //  }
 //
 //  // getAuthStatusListener() {
 //  //   return this.authStatusListener.asObservable();
 //  // }
 //

 //
 //  // postUsers(users : User[]): Observable<any> {
 //  //       return this.http.post<any>("http://localhost:8083/addusers" , users);
 //  // }
 //
 //

 //
 //
 //  autoAuthUser() {
 //    const authInformation = this.getAuthData();
 //    if (!authInformation) {
 //      return;
 //    }
 //    const now = new Date();
 //    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
 //    if (expiresIn > 0) {
 //      this.token = authInformation.token;
 //      this.isAuthenticated = true;
 //      this.setAuthTimer(expiresIn / 1000);
 //      // this.authStatusListener.next(true);
 //    }
 //  }
 //
 //
 //   setAuthTimer(duration: number) {
 //    this.tokenTimer = setTimeout(() => {
 //      this.logout();
 //    }, duration * 1000);
 //  }
 //

 //
 //  getAuthData() {
 //    const token = localStorage.getItem("token");
 //    const expirationDate = localStorage.getItem("expiration");
 //    const id  = localStorage.getItem("id");
 //    const role =  localStorage.getItem("role");
 //    if (!token || !expirationDate) {
 //      return;
 //    }
 //    return {
 //      token: token,
 //      expirationDate: new Date(expirationDate),
 //      id : id  ,
 //      role : role
 //    }
 //  }


}
