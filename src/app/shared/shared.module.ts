import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MensajeErrorCamposDirective } from './directivas/error-campos/directiva/mensaje-error-campos.directive';
import { MensajeErrorCamposSubmitDirective } from './directivas/error-campos/directiva/mensaje-error-campos-submit.directive';
import { MensajeErrorCamposContenedorDirective } from './directivas/error-campos/directiva/mensaje-error-campos-contenedor.directive';
import { ErrorCamposPlantillaComponent } from './directivas/error-campos/componente/error-campos-plantilla.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TrackByPipe } from './pipe/track-by.pipe';
import { FotoComponent } from './foto/foto.component';
import { LoteService } from './service/lote/lote.service';
import { OperacionService } from './service/operacion/operacion.service';
import { OperarioService } from './service/operario/operario.service';
import { MensajeService } from './service/mensaje/mensaje.service';
import { MensajeComponent } from './mensaje/mensaje.component';

@NgModule({
  declarations: [
    ErrorCamposPlantillaComponent,
    MensajeErrorCamposDirective,
    MensajeErrorCamposContenedorDirective,
    MensajeErrorCamposSubmitDirective,
    TrackByPipe,
    FotoComponent,
    MensajeComponent
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [
    HttpClientModule,
    MensajeErrorCamposDirective,
    MensajeErrorCamposContenedorDirective,
    MensajeErrorCamposSubmitDirective,
    ReactiveFormsModule,
    FormsModule,
    TrackByPipe,
    FotoComponent,
    MensajeComponent
  ],
  providers: [LoteService,
    OperacionService,
    OperarioService,
    MensajeService]
})
export class SharedModule { }
