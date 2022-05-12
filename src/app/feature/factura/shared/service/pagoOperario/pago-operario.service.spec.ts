import { TestBed } from '@angular/core/testing';

import { PagoOperarioService } from './pago-operario.service';

describe('PagoOperarioService', () => {
  let service: PagoOperarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PagoOperarioService]
    });
    service = TestBed.inject(PagoOperarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
