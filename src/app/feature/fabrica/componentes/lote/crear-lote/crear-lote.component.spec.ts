import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Lote } from '@fabrica/shared/model/lote';
import { LoteService } from '@fabrica/shared/service/lote/lote.service';
import { of } from 'rxjs';

import { CrearLoteComponent } from './crear-lote.component';

describe('CrearLoteComponent', () => {
  let component: CrearLoteComponent;
  let fixture: ComponentFixture<CrearLoteComponent>;

  let loteService: LoteService;

  const lote: Lote = new Lote('rf01', 25, '10/02/2022', '10/03/2022', 'img1');

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrearLoteComponent],
      imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule
      ],
      providers: [LoteService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearLoteComponent);
    component = fixture.componentInstance;
    loteService = TestBed.inject(LoteService);
    spyOn(loteService, 'crearLote').and.returnValue(of(lote));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.loteForm.valid).toBeFalsy();
  });

  it('Registrando un Lote', () => {
    expect(component.loteForm.valid).toBeFalsy();
    component.loteForm.controls.id.setValue('rf01');
    component.loteForm.controls.cantidad.setValue(25);
    component.loteForm.controls.fechaInicio.setValue('10/02/2022');
    component.loteForm.controls.fechaFin.setValue('10/03/2022');
    component.loteForm.controls.foto.setValue('img1');
    expect(component.loteForm.valid).toBeTruthy();
    component.crearLote();
    expect(loteService.crearLote).toHaveBeenCalled();
    /*  expect(component.loteForm.value).toEqual(lote); */
  });

});
