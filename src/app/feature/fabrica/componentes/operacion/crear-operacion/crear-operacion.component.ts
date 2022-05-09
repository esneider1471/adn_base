import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OperacionService } from '@fabrica/shared/service/operacion/operacion.service';

@Component({
  selector: 'app-crear-operacion',
  templateUrl: './crear-operacion.component.html',
  styleUrls: ['./crear-operacion.component.scss']
})
export class CrearOperacionComponent implements OnInit {

  operacionForm: FormGroup;

  constructor(private operacionService: OperacionService) { }

  ngOnInit() {
    this.construirFormularioLOperacion();
  }

  crearOperacion() {
    this.operacionService.crearOperacion(this.operacionForm.value).subscribe(resp => {
      if (resp) {
        this.operacionForm.reset();
      }
    }
    );
  }

  private construirFormularioLOperacion() {
    this.operacionForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      nombreOperacion: new FormControl('', [Validators.required]),
      valorOperacionUnidad: new FormControl('', [Validators.required]),
    });
  }
}
