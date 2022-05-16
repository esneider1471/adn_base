import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { FabricaComponent } from './componentes/fabrica/fabrica.component';
import { CrearLoteComponent } from './componentes/lote/crear-lote/crear-lote.component';
import { CrearOperacionComponent } from './componentes/operacion/crear-operacion/crear-operacion.component';
import { CrearOperarioComponent } from './componentes/operario/crear-operario/crear-operario.component';
import { FabricaRoutingModule } from './fabrica-routing.module';
import { ListarLoteComponent } from './componentes/lote/listar-lote/listar-lote.component';
import { ListarOperacionComponent } from './componentes/operacion/listar-operacion/listar-operacion.component';
import { ListarOperarioComponent } from './componentes/operario/listar-operario/listar-operario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CrearLoteComponent,
    CrearOperacionComponent,
    CrearOperarioComponent,
    FabricaComponent,
    ListarLoteComponent,
    ListarOperacionComponent,
    ListarOperarioComponent
  ],
  imports: [
    CommonModule,
    FabricaRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FabricaModule { }
