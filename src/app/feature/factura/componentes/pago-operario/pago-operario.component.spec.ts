import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OperacionService } from '@shared/service/operacion/operacion.service';
import { OperarioService } from '@shared/service/operario/operario.service';
import { Pago } from '@factura/shared/model/pagoOperario';
import { AsignacionLoteService } from '@factura/shared/service/asignacionLote/asignacion-lote.service';
import { PagoOperarioService } from '@factura/shared/service/pagoOperario/pago-operario.service';

import { PagoOperarioComponent } from './pago-operario.component';

describe('PagoOperarioComponent', () => {
  let component: PagoOperarioComponent;
  let fixture: ComponentFixture<PagoOperarioComponent>;
  let pagoOperarioService: PagoOperarioService;
  const pagoOperario: Pago[] = [];
  pagoOperario.push(
    { operario: 'o69', referenciaLote: 'l6', operacion: 'op40', cantidadPrendas: 12, valorOperacion: 100 },
    { operario: 'o69', referenciaLote: 'l6', operacion: 'op40', cantidadPrendas: 10, valorOperacion: 400 },
  );

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagoOperarioComponent],
      imports: [HttpClientTestingModule],
      providers: [PagoOperarioService,
        OperacionService,
        OperarioService,
        AsignacionLoteService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagoOperarioComponent);
    component = fixture.componentInstance;
    pagoOperarioService = TestBed.inject(PagoOperarioService);
    spyOn(pagoOperarioService, 'consultarPagoOperario').and.returnValue(
      Promise.resolve(pagoOperario)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('consultar pago operarios', () => {
    component.consultarPagoOperario();
    /*  expect(component.pagoOperario.length).toEqual(2); */
  });

  it('calcular Total', () => {
    expect(component.totalPagar).not.toEqual(0);
  });

});
