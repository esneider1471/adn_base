import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoOperarioComponent } from './pago-operario.component';

describe('PagoOperarioComponent', () => {
  let component: PagoOperarioComponent;
  let fixture: ComponentFixture<PagoOperarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagoOperarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagoOperarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
