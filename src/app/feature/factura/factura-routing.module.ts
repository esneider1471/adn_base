import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityGuard } from '@core/guard/security.guard';
import { CrearAsignacionLoteComponent } from './componentes/asignacionLote/crear-asignacion-lote/crear-asignacion-lote.component';
import { ListarAsignacionLoteComponent } from './componentes/asignacionLote/listar-asignacion-lote/listar-asignacion-lote.component';
import { FacturaComponent } from './componentes/factura/factura.component';
import { PagoOperarioComponent } from './componentes/pago-operario/pago-operario.component';

const routes: Routes = [
  {
    path: '',
    component: FacturaComponent,
    canActivate: [SecurityGuard],
    children: [
      {
        path: 'crear/asignacionLote',
        component: CrearAsignacionLoteComponent,
        canActivate: [SecurityGuard]
      },
      {
        path: 'listar/asignacionLote',
        component: ListarAsignacionLoteComponent,
        canActivate: [SecurityGuard]
      },
      {
        path: 'pagar',
        component: PagoOperarioComponent,
        canActivate: [SecurityGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacturaRoutingModule { }
