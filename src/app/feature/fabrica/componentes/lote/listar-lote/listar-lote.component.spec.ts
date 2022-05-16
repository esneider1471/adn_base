import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Lote } from '@shared/model/lote';
import { LoteService } from '@fabrica/shared/service/lote/lote.service';
import { of } from 'rxjs';

import { ListarLoteComponent } from './listar-lote.component';

describe('ListarLoteComponent', () => {
  let component: ListarLoteComponent;
  let fixture: ComponentFixture<ListarLoteComponent>;
  let loteService: LoteService;

  const lotes: Lote[] = [new Lote('rf01', 220, '10/02/2022', '10/03/2022', 'img1'),
  new Lote('rf02', 220, '2022-05-18', '2022-05-03', 'img2')];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ListarLoteComponent],
      imports: [
        CommonModule,
        HttpClientTestingModule
      ],
      providers: [LoteService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarLoteComponent);
    component = fixture.componentInstance;
    loteService = TestBed.inject(LoteService);
    spyOn(loteService, 'listarLotes').and.returnValue(
      of(lotes)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();

  });

  it('consultar lotes', () => {
    component.listarLotes();
    expect(component.listaLotes.length).toEqual(lotes.length);
  });

});
