import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Operario } from '@fabrica/shared/model/operario';
import { environment } from 'src/environments/environment';

@Injectable()
export class OperarioService {

  constructor(protected http: HttpClient) { }

  public crearOperario(operario: Operario) {
    return this.http.post<Operario>(`${environment.endpoint}/operario`, operario);
  }

  public listarOperarios() {
    return this.http.get<Operario[]>(`${environment.endpoint}/operario`);
  }
}
