import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarLoteComponent } from './listar-lote.component';

describe('ListarLoteComponent', () => {
  let component: ListarLoteComponent;
  let fixture: ComponentFixture<ListarLoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarLoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarLoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
