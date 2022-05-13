import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Operario } from '@fabrica/shared/model/operario';
import { OperarioService } from '@fabrica/shared/service/operario/operario.service';
import { of } from 'rxjs';

import { CrearOperarioComponent } from './crear-operario.component';

describe('CrearOperarioComponent', () => {
  let component: CrearOperarioComponent;
  let fixture: ComponentFixture<CrearOperarioComponent>;
  let operarioService: OperarioService;
  const operario:Operario = new Operario('1', 'operario 1', '2222222', 'cra 66');

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
    operarioService = TestBed.inject(OperarioService);
    spyOn(operarioService, 'crearOperario').and.returnValue(
      of(operario)
    );
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
    expect(operarioService.crearOperario).toHaveBeenCalled();
  });
});
