import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoteService } from '@fabrica/shared/service/lote/lote.service';
import { OperacionService } from '@fabrica/shared/service/operacion/operacion.service';
import { OperarioService } from '@fabrica/shared/service/operario/operario.service';
import { AsignacionLote } from '@factura/shared/model/asignacionLote';
import { AsignacionLoteService } from '@factura/shared/service/asignacionLote/asignacion-lote.service';
import { of } from 'rxjs';

import { CrearAsignacionLoteComponent } from './crear-asignacion-lote.component';

describe('CrearAsignacionLoteComponent', () => {
  let component: CrearAsignacionLoteComponent;
  let fixture: ComponentFixture<CrearAsignacionLoteComponent>;
  let asignacionService: AsignacionLoteService;
  const asignacionLote = new AsignacionLote(3,'rf03', 12,'corte', '102566444');

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrearAsignacionLoteComponent],
      imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule
      ],
      providers: [AsignacionLoteService, LoteService, OperacionService, OperarioService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearAsignacionLoteComponent);
    component = fixture.componentInstance;
    asignacionService = TestBed.inject(AsignacionLoteService);
    spyOn(asignacionService, 'crearAsignacionLote').and.returnValue(
      of(asignacionLote)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.asignacionLoteForm.valid).toBeFalsy();
  });

  it('Registrando una operacion', () => {
    expect(component.asignacionLoteForm.valid).toBeFalsy();
    component.asignacionLoteForm.controls.id.setValue(4);
    component.asignacionLoteForm.controls.referenciaLote.setValue('rf03');
    component.asignacionLoteForm.controls.cantidadPrendas.setValue(12);
    component.asignacionLoteForm.controls.operacionId.setValue('corte');
    component.asignacionLoteForm.controls.operarioId.setValue('102566444');
    expect(component.asignacionLoteForm.valid).toBeTruthy();

    component.crearAsignacionLote();
  });
});
