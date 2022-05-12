import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Lote } from '@fabrica/shared/model/lote';
import { Operacion } from '@fabrica/shared/model/operacion';
import { Operario } from '@fabrica/shared/model/operario';
import { LoteService } from '@fabrica/shared/service/lote/lote.service';
import { OperacionService } from '@fabrica/shared/service/operacion/operacion.service';
import { OperarioService } from '@fabrica/shared/service/operario/operario.service';
import { AsignacionLoteService } from '@factura/shared/service/asignacionLote/asignacion-lote.service';

@Component({
  selector: 'app-crear-asignacion-lote',
  templateUrl: './crear-asignacion-lote.component.html',
  styleUrls: ['./crear-asignacion-lote.component.scss']
})
export class CrearAsignacionLoteComponent implements OnInit {

  asignacionLoteForm: FormGroup;
  listaLotes: Lote[];
  listaOperaciones: Operacion[];
  listaOperarios: Operario[];

  constructor(private asignacionLoteService: AsignacionLoteService,
              private loteService: LoteService,
              private operacionService: OperacionService,
              private operarioSnervice: OperarioService) { }

  ngOnInit() {
    this.construirFormularioLote();

    this.loteService.listarLotes().subscribe(lotes => {
      this.listaLotes = lotes;
    });

    this.operacionService.listarOperaciones().subscribe(operaciones => {
      this.listaOperaciones = operaciones;
    });

    this.operarioSnervice.listarOperarios().subscribe(resp =>
      this.listaOperarios = resp
    );

  }

  crearAsignacionLote() {
    this.asignacionLoteService.crearAsignacionLote(this.asignacionLoteForm.value).subscribe(resp => {
      if (resp) {
        this.asignacionLoteForm.reset();
      }
    }
    );
  }

  private construirFormularioLote() {
    this.asignacionLoteForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      referenciaLote: new FormControl('', [Validators.required]),
      cantidadPrendas: new FormControl('', [Validators.required]),
      operacionId: new FormControl('', [Validators.required]),
      operarioId: new FormControl('', [Validators.required])
    });
  }
}
