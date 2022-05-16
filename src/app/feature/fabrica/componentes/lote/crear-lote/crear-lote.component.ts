import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoteService } from '@shared/service/lote/lote.service';
import { MensajeService } from '@shared/service/mensaje/mensaje.service';

@Component({
  selector: 'app-crear-lote',
  templateUrl: './crear-lote.component.html',
  styleUrls: ['./crear-lote.component.scss']
})
export class CrearLoteComponent implements OnInit {

  loteForm: FormGroup;

  constructor(private loteService: LoteService,
              private mensajeService: MensajeService) { }

  ngOnInit() {
    this.construirFormularioLote();
  }

  crearLote() {
    this.loteService.crearLote(this.loteForm.value).subscribe(resp => {
      if (resp) {
        this.mensajeService.mostrarMensaje(
          {
            titulo: 'Su Registro Ha Sido Creado!',
            mensaje: `Registro creado con exito`,
            tipo: 2
          }, 'fabrica/listar/lote');
      }
    }
    );
  }

  private construirFormularioLote() {
    this.loteForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      cantidad: new FormControl('', [Validators.required]),
      fechaInicio: new FormControl('', [Validators.required]),
      fechaFin: new FormControl('', [Validators.required]),
      foto: new FormControl('', [Validators.required])
    });
  }
}
