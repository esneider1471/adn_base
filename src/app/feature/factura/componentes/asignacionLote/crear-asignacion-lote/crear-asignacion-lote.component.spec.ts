import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoteService } from '@fabrica/shared/service/lote/lote.service';
import { OperacionService } from '@fabrica/shared/service/operacion/operacion.service';
import { OperarioService } from '@fabrica/shared/service/operario/operario.service';
import { AsignacionLoteService } from '@factura/shared/service/asignacionLote/asignacion-lote.service';

import { CrearAsignacionLoteComponent } from './crear-asignacion-lote.component';

describe('CrearAsignacionLoteComponent', () => {
  let component: CrearAsignacionLoteComponent;
  let fixture: ComponentFixture<CrearAsignacionLoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrearAsignacionLoteComponent],
      imports: [HttpClientTestingModule],
      providers: [AsignacionLoteService, LoteService, OperacionService, OperarioService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearAsignacionLoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
