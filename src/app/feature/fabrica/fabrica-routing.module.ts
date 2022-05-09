import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityGuard } from '@core/guard/security.guard';
import { FabricaComponent } from './componentes/fabrica/fabrica.component';
import { CrearLoteComponent } from './componentes/lote/crear-lote/crear-lote.component';
import { ListarLoteComponent } from './componentes/lote/listar-lote/listar-lote.component';
import { CrearOperacionComponent } from './componentes/operacion/crear-operacion/crear-operacion.component';
import { ListarOperacionComponent } from './componentes/operacion/listar-operacion/listar-operacion.component';
import { CrearOperarioComponent } from './componentes/operario/crear-operario/crear-operario.component';
import { ListarOperarioComponent } from './componentes/operario/listar-operario/listar-operario.component';

const routes: Routes = [
  {
    path: '',
    component: FabricaComponent,
    children: [
      {
        path: 'crear/lote',
        component: CrearLoteComponent,
        canActivate: [SecurityGuard]
      },
      {
        path: 'listar/lote',
        component: ListarLoteComponent,
        canActivate: [SecurityGuard]
      },
      {
        path: 'crear/operario',
        component: CrearOperarioComponent,
        canActivate: [SecurityGuard]
      },
      {
        path: 'listar/operario',
        component: ListarOperarioComponent,
        canActivate: [SecurityGuard]
      },
      {
        path: 'crear/operacion',
        component: CrearOperacionComponent,
        canActivate: [SecurityGuard]
      },
      {
        path: 'listar/operacion',
        component: ListarOperacionComponent,
        canActivate: [SecurityGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FabricaRoutingModule { }
