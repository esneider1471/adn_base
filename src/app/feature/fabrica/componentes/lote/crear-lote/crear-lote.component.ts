import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoteService } from '@fabrica/shared/service/lote/lote.service';

@Component({
  selector: 'app-crear-lote',
  templateUrl: './crear-lote.component.html',
  styleUrls: ['./crear-lote.component.scss']
})
export class CrearLoteComponent implements OnInit {

  loteForm: FormGroup;

  constructor(private loteService: LoteService) { }

  ngOnInit() {
    this.construirFormularioLote();
  }

  crearLote() {
    this.loteService.crearLote(this.loteForm.value).subscribe(resp => {
      if (resp) {
        this.loteForm.reset();
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
