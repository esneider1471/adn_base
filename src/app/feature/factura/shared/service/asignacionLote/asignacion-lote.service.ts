import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AsignacionLote } from '@factura/shared/model/asignacionLote';
import { environment } from 'src/environments/environment';

@Injectable()
export class AsignacionLoteService {

  constructor(protected http: HttpClient) { }

  public crearAsignacionLote(asignacionLote: AsignacionLote) {
    return this.http.post<AsignacionLote>(`${environment.endpoint}/asignacionLote`, asignacionLote);
  }

  public listarAsignacionLotes() {
    return this.http.get<AsignacionLote[]>(`${environment.endpoint}/asignacionLote`);
  }

  public consultarAsignacionOperarioId(operarioId: string) {
    return this.http.get<AsignacionLote[]>(`${environment.endpoint}/asignacionLote?operarioId=${operarioId}`).toPromise();
  }
}
