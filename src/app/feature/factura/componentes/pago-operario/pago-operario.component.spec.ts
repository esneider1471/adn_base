import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OperacionService } from '@fabrica/shared/service/operacion/operacion.service';
import { OperarioService } from '@fabrica/shared/service/operario/operario.service';
import { AsignacionLoteService } from '@factura/shared/service/asignacionLote/asignacion-lote.service';
import { PagoOperarioService } from '@factura/shared/service/pagoOperario/pago-operario.service';

import { PagoOperarioComponent } from './pago-operario.component';

describe('PagoOperarioComponent', () => {
  let component: PagoOperarioComponent;
  let fixture: ComponentFixture<PagoOperarioComponent>;

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
