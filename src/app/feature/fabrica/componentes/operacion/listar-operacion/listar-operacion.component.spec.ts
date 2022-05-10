import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OperacionService } from '@fabrica/shared/service/operacion/operacion.service';

import { ListarOperacionComponent } from './listar-operacion.component';

describe('ListarOperacionComponent', () => {
  let component: ListarOperacionComponent;
  let fixture: ComponentFixture<ListarOperacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarOperacionComponent ],
      imports:[
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule
      ],
      providers:[OperacionService]
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
