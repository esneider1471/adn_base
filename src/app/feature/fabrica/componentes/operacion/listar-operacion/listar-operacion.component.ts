import { Component, OnInit } from '@angular/core';
import { Operacion } from '@fabrica/shared/model/operacion';
import { OperacionService } from '@fabrica/shared/service/operacion/operacion.service';

@Component({
  selector: 'app-listar-operacion',
  templateUrl: './listar-operacion.component.html',
  styleUrls: ['./listar-operacion.component.scss']
})
export class ListarOperacionComponent implements OnInit {


  listaOperaciones: Operacion[];

  constructor(private operacionService: OperacionService) { }

  ngOnInit() {
    this.listarOperaciones();
  }

   listarOperaciones() {
    this.operacionService.listarOperaciones().subscribe(resp =>
      this.listaOperaciones = resp
    );
  }
}
