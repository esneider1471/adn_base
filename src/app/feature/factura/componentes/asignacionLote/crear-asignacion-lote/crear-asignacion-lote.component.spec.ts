import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Lote } from '@fabrica/shared/model/lote';
import { Operacion } from '@fabrica/shared/model/operacion';
import { Operario } from '@fabrica/shared/model/operario';
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
  let loteService: LoteService;
  let operacionService: OperacionService;
  let operarioService: OperarioService;

  const asignacionLote = new AsignacionLote(3, 'rf03', 12, 'corte', '102566444');
  const lotes: Lote[] = [
    new Lote('rf01', 220, '10/02/2022', '10/03/2022', 'img1'),
    new Lote('rf02', 220, '2022-05-18', '2022-05-03', 'img2')];
  const operaciones: Operacion[] = [
    new Operacion('op1', 'reudo', 100),
    new Operacion('op2', 'corte', 200)];
  const operarios: Operario[] = [
    new Operario('102614544', 'juan', '8744555', 'cr 89 #20 66'),
    new Operario('1026165144', 'andres', '87444411', 'cr 22 #20 66')];

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
    loteService = TestBed.inject(LoteService);
    spyOn(loteService, 'listarLotes').and.returnValue(
      of(lotes)
    );
    operacionService = TestBed.inject(OperacionService);
    spyOn(operacionService, 'listarOperaciones').and.returnValue(
      of(operaciones)
    );
    operarioService = TestBed.inject(OperarioService);
    spyOn(operarioService, 'listarOperarios').and.returnValue(
      of(operarios)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it('consulto lotes', () => {
    expect(component.listaLotes.length).toEqual(2);
  });

  it('consulto operaciones', () => {
    expect(component.listaOperaciones.length).toEqual(2);
  });

  it('consulto operarios', () => {
    expect(component.listaOperarios.length).toEqual(2);
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
