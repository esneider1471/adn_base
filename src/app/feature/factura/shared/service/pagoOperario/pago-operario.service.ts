import { Injectable } from '@angular/core';
import { Operacion } from '@shared/model/operacion';
import { Operario } from '@shared/model/operario';
import { OperacionService } from '@fabrica/shared/service/operacion/operacion.service';
import { OperarioService } from '@fabrica/shared/service/operario/operario.service';
import { AsignacionLote } from '@factura/shared/model/asignacionLote';
import { Pago } from '@factura/shared/model/pagoOperario';
import { AsignacionLoteService } from '../asignacionLote/asignacion-lote.service';

@Injectable()
export class PagoOperarioService {

  asignacionLote: AsignacionLote[];
  operario: Operario;
  operacion: Operacion[];
  pagoOperario: Pago[] = [];

  constructor(private operacionServise: OperacionService,
              private operarioService: OperarioService,
              private asignacionLoteService: AsignacionLoteService) { }

  public async consultarPagoOperario(operarioId: string) {
    this.operario = await this.operarioService.consultarOperarioId(operarioId);
    this.asignacionLote = await this.asignacionLoteService.consultarAsignacionOperarioId(operarioId);

    if (this.asignacionLote.length === 1) {
      this.operacion = await this.operacionServise.consultarOperacionId(this.asignacionLote[0].operacionId);
      const pago: Pago = {
        operario: this.operario[0].nombre, referenciaLote: this.asignacionLote[0].referenciaLote,
        operacion: this.asignacionLote[0].operacionId, cantidadPrendas: this.asignacionLote[0].cantidadPrendas,
        valorOperacion: this.operacion[0].valorOperacionUnidad
      };
      this.pagoOperario.push(pago);
    } else {

      for (const asignacion of this.asignacionLote) {
        this.operacion = await this.operacionServise.consultarOperacionId(asignacion.operacionId);
        const pago: Pago = {
          operario: this.operario[0].nombre, referenciaLote: asignacion.referenciaLote,
          operacion: asignacion.operacionId, cantidadPrendas: asignacion.cantidadPrendas,
          valorOperacion: this.operacion[0].valorOperacionUnidad
        };
        this.pagoOperario.push(pago);
      }
    }

    return this.pagoOperario;
  }
}
