import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Operacion } from '@fabrica/shared/model/operacion';
import { environment } from 'src/environments/environment';

import { OperacionService } from './operacion.service';

describe('OperacionService', () => {
  let service: OperacionService;
  let httpMock: HttpTestingController;
  const apiEndpointOperacion = `${environment.endpoint}/operacion`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [OperacionService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(OperacionService);
  });

  it('should be created', () => {
    const operationService: OperacionService = TestBed.inject(OperacionService);
    expect(operationService).toBeTruthy();
  });

  it('deberia listar opreaciones', () => {
    const dummyOperaciones = [
      new Operacion('op04', 'corte', 200), new Operacion('0p05', 'pulido' , 100)
    ];
    service.listarOperaciones().subscribe(operaciones => {
      expect(operaciones.length).toBe(2);
      expect(operaciones).toEqual(dummyOperaciones);
    });
    const req = httpMock.expectOne(apiEndpointOperacion);
    expect(req.request.method).toBe('GET');
    req.flush(dummyOperaciones);
  });

  it('deberia crear un operario', () => {
    const dummyOperacion = new Operacion('op04', 'corte', 200);
    service.crearOperacion(dummyOperacion).subscribe((respuesta) => {
      expect(respuesta).toEqual(respuesta);
    });
    const req = httpMock.expectOne(apiEndpointOperacion);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({body: true}));
  });
});
