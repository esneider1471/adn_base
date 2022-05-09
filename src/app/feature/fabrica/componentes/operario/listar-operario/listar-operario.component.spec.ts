import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarOperarioComponent } from './listar-operario.component';

describe('ListarOperarioComponent', () => {
  let component: ListarOperarioComponent;
  let fixture: ComponentFixture<ListarOperarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarOperarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarOperarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
