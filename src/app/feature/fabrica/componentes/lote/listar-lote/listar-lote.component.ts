import { Component, OnInit } from '@angular/core';
import { Lote } from '@fabrica/shared/model/lote';
import { LoteService } from '@fabrica/shared/service/lote/lote.service';

@Component({
  selector: 'app-listar-lote',
  templateUrl: './listar-lote.component.html',
  styleUrls: ['./listar-lote.component.scss']
})
export class ListarLoteComponent implements OnInit {

  public listaLotes: Lote[] = [];

  constructor(private loteService: LoteService) { }

  ngOnInit() {
    this.listarLotes();
  }

   listarLotes() {
    this.loteService.listarLotes().subscribe(lotes => {
      this.listaLotes = lotes
    }
    );
  }
}
