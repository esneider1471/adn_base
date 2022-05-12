import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsignacionLote } from '@factura/shared/model/asignacionLote';
import { AsignacionLoteService } from '@factura/shared/service/asignacionLote/asignacion-lote.service';
import { of } from 'rxjs';

import { ListarAsignacionLoteComponent } from './listar-asignacion-lote.component';

describe('ListarAsignacionLoteComponent', () => {
  let component: ListarAsignacionLoteComponent;
  let fixture: ComponentFixture<ListarAsignacionLoteComponent>;
  let asignacionLoteService: AsignacionLoteService;

  const asignacionLotes: AsignacionLote[] = [new AsignacionLote(4, 'rf08', 14, 'op02', '102614544'),
  new AsignacionLote(5, 'rf08', 15, 'op02', '102614544')];

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
    asignacionLoteService = TestBed.inject(AsignacionLoteService);
    spyOn(asignacionLoteService, 'listarAsignacionLotes').and.returnValue(
      of(asignacionLotes)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('consultar lotes', () => {
    component.listarAsignacionLotes();
    expect(component.listaAsignacionLotes.length).toEqual(asignacionLotes.length);
  });
});
