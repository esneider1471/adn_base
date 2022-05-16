import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Operacion } from '@shared/model/operacion';
import { OperacionService } from '@fabrica/shared/service/operacion/operacion.service';
import { of } from 'rxjs';

import { ListarOperacionComponent } from './listar-operacion.component';

describe('ListarOperacionComponent', () => {
  let component: ListarOperacionComponent;
  let fixture: ComponentFixture<ListarOperacionComponent>;
  let operacionService: OperacionService;
  const operaciones: Operacion[] = [
    new Operacion('op1', 'reudo', 100),
    new Operacion('op2', 'corte', 200)];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarOperacionComponent],
      imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule
      ],
      providers: [OperacionService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarOperacionComponent);
    component = fixture.componentInstance;
    operacionService = TestBed.inject(OperacionService);
    spyOn(operacionService, 'listarOperaciones').and.returnValue(
      of(operaciones)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deberia listar las operaciones', () => {
    component.listarOperaciones();
    expect(2).toBe(component.listaOperaciones.length);
  });
});
