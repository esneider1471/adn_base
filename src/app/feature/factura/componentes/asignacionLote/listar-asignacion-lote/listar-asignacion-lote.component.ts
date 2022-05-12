import { Component, OnInit } from '@angular/core';
import { AsignacionLote } from '@factura/shared/model/asignacionLote';
import { AsignacionLoteService } from '@factura/shared/service/asignacionLote/asignacion-lote.service';

@Component({
  selector: 'app-listar-asignacion-lote',
  templateUrl: './listar-asignacion-lote.component.html',
  styleUrls: ['./listar-asignacion-lote.component.scss']
})
export class ListarAsignacionLoteComponent implements OnInit {

  public listaAsignacionLotes: AsignacionLote[];

  constructor(private asignacionLoteService: AsignacionLoteService) { }

  ngOnInit() {
    this.listarLotes();
  }

  listarLotes() {
    this.asignacionLoteService.listarAsignacionLotes().subscribe(asignacionLotes =>
      this.listaAsignacionLotes = asignacionLotes
    );
  }

}
