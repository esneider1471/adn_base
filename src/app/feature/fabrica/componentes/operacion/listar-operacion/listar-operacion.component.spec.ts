import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarOperacionComponent } from './listar-operacion.component';

describe('ListarOperacionComponent', () => {
  let component: ListarOperacionComponent;
  let fixture: ComponentFixture<ListarOperacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarOperacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarOperacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
