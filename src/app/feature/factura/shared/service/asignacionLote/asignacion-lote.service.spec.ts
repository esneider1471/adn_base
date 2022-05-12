import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { AsignacionLoteService } from './asignacion-lote.service';

describe('AsignacionLoteService', () => {
  let service: AsignacionLoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AsignacionLoteService]
    });
    service = TestBed.inject(AsignacionLoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
