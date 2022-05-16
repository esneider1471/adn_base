import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Operario } from '@shared/model/operario';
import { environment } from 'src/environments/environment';

import { OperarioService } from './operario.service';

describe('OperarioService', () => {
  let httpMock: HttpTestingController;
  let service: OperarioService;
  const apiEndpointOperarioConsulta = `${environment.endpoint}/operario`;
  const apiEndpointOperarioIdConsulta = `${environment.endpoint}/operario?id=102614544`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [OperarioService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(OperarioService);
  });

  it('should be created', () => {
    const operarioService: OperarioService = TestBed.inject(OperarioService);
    expect(operarioService).toBeTruthy();
  });

  it('deberia listar operarios', () => {
    const dummyOperarios = [
      new Operario('1', 'operario 1', '2222222', 'cra 66'), new Operario('2', 'operario 2', '222333', 'cra 85')
    ];
    service.listarOperarios().subscribe(operarios => {
      expect(operarios.length).toBe(2);
      expect(operarios).toEqual(dummyOperarios);
    });
    const req = httpMock.expectOne(apiEndpointOperarioConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(dummyOperarios);
  });

  it('deberia crear un operario', () => {
    const dummyOperario = new Operario('1', 'operario 1', '2222222', 'cra 66');
    service.crearOperario(dummyOperario).subscribe((respuesta) => {
      expect(respuesta).toEqual(respuesta);
    });
    const req = httpMock.expectOne(apiEndpointOperarioConsulta);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({ body: true }));
  });

  it('deberia consultar operario por operacionId', () => {
    const dummyAsignacion = new Operario('102614544', 'vanesa', '4445588', 'cr 89 #20 66');
    service.consultarOperarioId('102614544').then(operario => {
      expect(operario).toEqual(dummyAsignacion);
    });
    const req = httpMock.expectOne(apiEndpointOperarioIdConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(dummyAsignacion);
  });
});
