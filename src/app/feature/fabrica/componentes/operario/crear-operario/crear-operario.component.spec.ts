import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearOperarioComponent } from './crear-operario.component';

describe('CrearOperarioComponent', () => {
  let component: CrearOperarioComponent;
  let fixture: ComponentFixture<CrearOperarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearOperarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearOperarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
