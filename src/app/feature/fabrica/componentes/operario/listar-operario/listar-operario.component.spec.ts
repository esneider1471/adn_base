import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Operario } from '@shared/model/operario';
import { OperarioService } from '@fabrica/shared/service/operario/operario.service';
import { of } from 'rxjs';

import { ListarOperarioComponent } from './listar-operario.component';

describe('ListarOperarioComponent', () => {
  let component: ListarOperarioComponent;
  let fixture: ComponentFixture<ListarOperarioComponent>;
  let operarioService: OperarioService;
  const operarios: Operario[] = [
    new Operario('102614544', 'juan', '8744555', 'cr 89 #20 66'),
    new Operario('1026165144', 'andres', '87444411', 'cr 22 #20 66')];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarOperarioComponent],
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
    fixture = TestBed.createComponent(ListarOperarioComponent);
    component = fixture.componentInstance;
    operarioService = TestBed.inject(OperarioService);
    spyOn(operarioService, 'listarOperarios').and.returnValue(
      of(operarios)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deberia listar las operarios', () => {
    component.listarOperarios();
    expect(2).toBe(component.listaOperarios.length);
  });
});
