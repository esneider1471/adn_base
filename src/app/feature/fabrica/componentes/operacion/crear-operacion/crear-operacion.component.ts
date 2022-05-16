import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MensajeService } from '@shared/service/mensaje/mensaje.service';
import { OperacionService } from '@shared/service/operacion/operacion.service';

@Component({
  selector: 'app-crear-operacion',
  templateUrl: './crear-operacion.component.html',
  styleUrls: ['./crear-operacion.component.scss']
})
export class CrearOperacionComponent implements OnInit {

  operacionForm: FormGroup;

  constructor(private operacionService: OperacionService,
              private mensajeService: MensajeService) { }

  ngOnInit() {
    this.construirFormularioLOperacion();
  }

  crearOperacion() {
    this.operacionService.crearOperacion(this.operacionForm.value).subscribe(resp => {
      if (resp) {
        this.mensajeService.mostrarMensaje(
          {
            titulo: 'Su Registro Ha Sido Creado!',
            mensaje: `Registro creado con exito`,
            tipo: 2
          }, 'fabrica/listar/operacion');
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
