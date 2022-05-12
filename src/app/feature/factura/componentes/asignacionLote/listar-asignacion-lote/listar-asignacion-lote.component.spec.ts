import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsignacionLoteService } from '@factura/shared/service/asignacionLote/asignacion-lote.service';

import { ListarAsignacionLoteComponent } from './listar-asignacion-lote.component';

describe('ListarAsignacionLoteComponent', () => {
  let component: ListarAsignacionLoteComponent;
  let fixture: ComponentFixture<ListarAsignacionLoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarAsignacionLoteComponent],
      imports: [HttpClientTestingModule],
      providers: [AsignacionLoteService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarAsignacionLoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
