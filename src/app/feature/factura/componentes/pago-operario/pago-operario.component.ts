import { Component } from '@angular/core';
import { Pago } from '@factura/shared/model/pagoOperario';
import { PagoOperarioService } from '@factura/shared/service/pagoOperario/pago-operario.service';

@Component({
  selector: 'app-pago-operario',
  templateUrl: './pago-operario.component.html',
  styleUrls: ['./pago-operario.component.scss']
})
export class PagoOperarioComponent {

  idOperario: string;
  pagoOperario: Pago[];
  totalPagar: number;

  constructor(private pagoOperarioService: PagoOperarioService) { }

  async consultarPagoOperario() {
    this.pagoOperario = await this.pagoOperarioService.consultarPagoOperario(this.idOperario);
    this.calcularTotal();
  }

  calcularTotal() {
    this.totalPagar=0;
    for (const pago of this.pagoOperario) {
      this.totalPagar += pago.cantidadPrendas * pago.valorOperacion;
    }
  }
}
