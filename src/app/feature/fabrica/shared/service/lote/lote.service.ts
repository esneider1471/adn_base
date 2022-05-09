import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lote } from '@fabrica/shared/model/lote';
import { environment } from 'src/environments/environment';

@Injectable()
export class LoteService {

  constructor(protected http: HttpClient) { }

  public crearLote(lote: Lote) {
    return this.http.post<Lote>(`${environment.endpoint}/lote`, lote);
  }

  public listarLotes() {
    return this.http.get<Lote[]>(`${environment.endpoint}/lote`);
  }
}
