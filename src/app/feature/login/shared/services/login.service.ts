import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Login } from '../model/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(protected http: HttpClient) { }

  public consultarUsuario(login: Login) {
    return this.http.get<Login>(`${environment.endpoint}/login?email=${login.email}&password=${login.password}`);
  }
}
