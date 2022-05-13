import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Lote } from '@fabrica/shared/model/lote';
import { environment } from 'src/environments/environment';

import { LoteService } from './lote.service';

describe('LoteService', () => {
  let service: LoteService;
  let httpMock: HttpTestingController;
  const apiEndpointLoteConsulta = `${environment.endpoint}/lote`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LoteService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(LoteService);
  });

  it('should be created', () => {
    const loteService: LoteService = TestBed.inject(LoteService);
    expect(loteService).toBeTruthy();
  });

  it('deberia crear un lote', () => {
    const dummyLotes = [
      new Lote('rf01', 25, '10/02/2022', '10/03/2022', 'img1'), new Lote('rf01', 25, '10/02/2022', '10/03/2022', 'img1')
    ];
    service.listarLotes().subscribe(lotes => {
      expect(lotes.length).toBe(2);
      expect(lotes).toEqual(dummyLotes);
    });
    const req = httpMock.expectOne(apiEndpointLoteConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(dummyLotes);
  });

});
