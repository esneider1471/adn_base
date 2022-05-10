import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OperacionService } from '@fabrica/shared/service/operacion/operacion.service';

import { CrearOperacionComponent } from './crear-operacion.component';

describe('CrearOperacionComponent', () => {
  let component: CrearOperacionComponent;
  let fixture: ComponentFixture<CrearOperacionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CrearOperacionComponent],
      imports:[
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule
      ],
      providers:[OperacionService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearOperacionComponent);
    component = fixture.componentInstance;
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
  });

});
