import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Operacion } from '@shared/model/operacion';
import { Operario } from '@shared/model/operario';
import { OperacionService } from '@shared/service/operacion/operacion.service';
import { OperarioService } from '@shared/service/operario/operario.service';
import { AsignacionLote } from '@factura/shared/model/asignacionLote';
import { AsignacionLoteService } from '../asignacionLote/asignacion-lote.service';

import { PagoOperarioService } from './pago-operario.service';

describe('PagoOperarioService', () => {
  let service: PagoOperarioService;
  let operacionServise: OperacionService;
  let operarioService: OperarioService;
  let asignacionLoteService: AsignacionLoteService;

  const dummyAsignacion = [
    new AsignacionLote(4, 'rf08', 14, 'op02', '102614544'),
    new AsignacionLote(5, 'rf08', 15, 'op03', '1026156333')
  ];
  const dummyOperario = new Operario('o69', 'operario 1', '2222222', 'cra 66');
  const dummyOperaciones = [
    new Operacion('op04', 'corte', 200),
    new Operacion('0p05', 'pulido', 100)
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PagoOperarioService, OperacionService, OperarioService, AsignacionLoteService]
    });
    service = TestBed.inject(PagoOperarioService);
    operacionServise = TestBed.inject(OperacionService);
    spyOn(operacionServise, 'consultarOperacionId').and.returnValue(
      Promise.resolve(dummyOperaciones)
    );
    operarioService = TestBed.inject(OperarioService);
    spyOn(operarioService, 'consultarOperarioId').and.returnValue(
      Promise.resolve(dummyOperario)
    );
    asignacionLoteService = TestBed.inject(AsignacionLoteService);
    spyOn(asignacionLoteService, 'consultarAsignacionOperarioId').and.returnValue(
      Promise.resolve(dummyAsignacion)
    );
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('deberia listar pago operario', () => {
    service.consultarPagoOperario('o69');
    /*   expect(service.operario.nombre).toEqual(dummyOperario.nombre);
      expect(service.asignacionLote).toEqual(dummyAsignacion);
      expect(service.asignacionLote.length).toEqual(1);
      expect(service.operacion).toEqual(dummyOperaciones);
   */
  });

});
