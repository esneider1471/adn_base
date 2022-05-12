import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacturaComponent } from './componentes/factura/factura.component';
import { PagoOperarioComponent } from './componentes/pago-operario/pago-operario.component';
import { FacturaRoutingModule } from './factura-routing.module';
import { AsignacionLoteService } from './shared/service/asignacionLote/asignacion-lote.service';
import { PagoOperarioService } from './shared/service/pagoOperario/pago-operario.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrearAsignacionLoteComponent } from './componentes/asignacionLote/crear-asignacion-lote/crear-asignacion-lote.component';
import { ListarAsignacionLoteComponent } from './componentes/asignacionLote/listar-asignacion-lote/listar-asignacion-lote.component';



@NgModule({
  declarations: [
    FacturaComponent,
    PagoOperarioComponent,
    CrearAsignacionLoteComponent,
    ListarAsignacionLoteComponent
  ],
  imports: [
    CommonModule,
    FacturaRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AsignacionLoteService,
    PagoOperarioService
  ]
})
export class FacturaModule { }
