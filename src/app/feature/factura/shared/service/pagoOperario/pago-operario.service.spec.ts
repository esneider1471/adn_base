import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { OperacionService } from '@fabrica/shared/service/operacion/operacion.service';
import { OperarioService } from '@fabrica/shared/service/operario/operario.service';
import { AsignacionLoteService } from '../asignacionLote/asignacion-lote.service';

import { PagoOperarioService } from './pago-operario.service';

describe('PagoOperarioService', () => {
  let service: PagoOperarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PagoOperarioService, OperacionService, OperarioService, AsignacionLoteService]
    });
    service = TestBed.inject(PagoOperarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
