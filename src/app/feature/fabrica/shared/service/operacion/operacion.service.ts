import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Operacion } from '@fabrica/shared/model/operacion';
import { environment } from 'src/environments/environment';

@Injectable()
export class OperacionService {

  constructor(protected http: HttpClient) { }

  public crearOperacion(operacion: Operacion) {
    return this.http.post<Operacion>(`${environment.endpoint}/operacion`, operacion);
  }

  public listarOperaciones() {
    return this.http.get<Operacion[]>(`${environment.endpoint}/operacion`);
  }
}
