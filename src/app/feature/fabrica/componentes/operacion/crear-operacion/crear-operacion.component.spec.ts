import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { Operacion } from '@shared/model/operacion';
import { MensajeService } from '@shared/service/mensaje/mensaje.service';
import { OperacionService } from '@shared/service/operacion/operacion.service';
import { of } from 'rxjs';

import { CrearOperacionComponent } from './crear-operacion.component';

describe('CrearOperacionComponent', () => {
  let component: CrearOperacionComponent;
  let fixture: ComponentFixture<CrearOperacionComponent>;
  let operacionService: OperacionService;
  const operacion = new Operacion('op04', 'corte', 200);

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CrearOperacionComponent],
      imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule,
        MatDialogModule,
        RouterTestingModule,
        BrowserAnimationsModule
      ],
      providers: [OperacionService, MensajeService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearOperacionComponent);
    component = fixture.componentInstance;
    operacionService = TestBed.inject(OperacionService);
    spyOn(operacionService, 'crearOperacion').and.returnValue(
      of(operacion)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.operacionForm.valid).toBeFalsy();
  });

  it('Registrando una operacion', () => {
    expect(component.operacionForm.valid).toBeFalsy();
    component.operacionForm.controls.id.setValue('op01');
    component.operacionForm.controls.nombreOperacion.setValue('corte');
    component.operacionForm.controls.valorOperacionUnidad.setValue(200);
    expect(component.operacionForm.valid).toBeTruthy();

    component.crearOperacion();
    expect(operacionService.crearOperacion).toHaveBeenCalled();
  });

});
