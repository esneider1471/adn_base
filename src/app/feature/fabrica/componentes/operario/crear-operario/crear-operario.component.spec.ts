import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OperarioService } from '@fabrica/shared/service/operario/operario.service';

import { CrearOperarioComponent } from './crear-operario.component';

describe('CrearOperarioComponent', () => {
  let component: CrearOperarioComponent;
  let fixture: ComponentFixture<CrearOperarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrearOperarioComponent],
      imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule
      ],
      providers: [OperarioService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearOperarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.operarioForm.valid).toBeFalsy();
  });

  it('Registrando una operacion', () => {
    expect(component.operarioForm.valid).toBeFalsy();
    component.operarioForm.controls.id.setValue('102547895');
    component.operarioForm.controls.nombre.setValue('test');
    component.operarioForm.controls.telefono.setValue('2226699');
    component.operarioForm.controls.direccion.setValue('cra 98 # 20 45');
    expect(component.operarioForm.valid).toBeTruthy();

    component.crearOperario();
  });
});
