import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearOperacionComponent } from './crear-operacion.component';

describe('CrearOperacionComponent', () => {
  let component: CrearOperacionComponent;
  let fixture: ComponentFixture<CrearOperacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrearOperacionComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearOperacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
