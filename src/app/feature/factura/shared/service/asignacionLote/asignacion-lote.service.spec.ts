import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AsignacionLote } from '@factura/shared/model/asignacionLote';
import { environment } from 'src/environments/environment';

import { AsignacionLoteService } from './asignacion-lote.service';

describe('AsignacionLoteService', () => {
  let httpMock: HttpTestingController;
  let service: AsignacionLoteService;
  const apiEndpointAsignacionConsulta = `${environment.endpoint}/asignacionLote`;

  beforeEach(() => {
    const injector= TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AsignacionLoteService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(AsignacionLoteService);
  });

 
  it('should be created', () => {
    const asignacionLoteService: AsignacionLoteService = TestBed.inject(AsignacionLoteService);
    expect(asignacionLoteService).toBeTruthy();
  });

  it('deberia listar Asinaciones', () => {
    const dummyAsignacion = [
      new AsignacionLote(4, 'rf08', 14, 'op02','102614544'), new  AsignacionLote(5, 'rf08', 15, 'op03','1026156333')
    ];
    service.listarAsignacionLotes().subscribe(asignacion => {
      expect(asignacion.length).toBe(2);
      expect(asignacion).toEqual(dummyAsignacion);
    });
    const req = httpMock.expectOne(apiEndpointAsignacionConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(dummyAsignacion);
  });

  it('deberia crear un operario', () => {
    const dummyAsignacion = new AsignacionLote(4, 'rf08', 14, 'op02','102614544');
    service.crearAsignacionLote(dummyAsignacion).subscribe((respuesta) => {
      expect(respuesta).toEqual(respuesta);
    });
    const req = httpMock.expectOne(apiEndpointAsignacionConsulta);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({ body: true }));
  });
});
