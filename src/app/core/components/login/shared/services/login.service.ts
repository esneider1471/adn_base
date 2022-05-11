import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Login } from '../model/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLogin$ = new EventEmitter<Login>();

  constructor(
    protected http: HttpClient,
    private readonly roter: Router) { }

  public consultarUsuario(login: Login) {
    return this.http.get<Login>(`${environment.endpoint}/login?email=${login.email}&password=${login.password}`)
      .pipe(tap(resp => this.isLogin$.next(resp)));
  }

  public logOut() {
    localStorage.removeItem('logIn');
    this.isLogin$.next(null);
    this.roter.navigateByUrl('/login');
  }

}
