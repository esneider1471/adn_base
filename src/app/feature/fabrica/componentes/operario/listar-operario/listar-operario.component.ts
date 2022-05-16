import { Component, OnInit } from '@angular/core';
import { Operario } from '@shared/model/operario';
import { OperarioService } from '@shared/service/operario/operario.service';

@Component({
  selector: 'app-listar-operario',
  templateUrl: './listar-operario.component.html',
  styleUrls: ['./listar-operario.component.scss']
})
export class ListarOperarioComponent implements OnInit {


  listaOperarios: Operario[];

  constructor(private operarioSnervice: OperarioService) { }

  ngOnInit() {
    this.listarOperarios();
  }

   listarOperarios() {
    this.operarioSnervice.listarOperarios().subscribe(resp =>
      this.listaOperarios = resp
    );
  }
}
