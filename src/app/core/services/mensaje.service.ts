import { Injectable, NgZone } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MensajeComponent } from '@core/components/mensaje/mensaje.component';
import { Mensaje } from '@core/modelo/mensaje';

@Injectable()
export class MensajeService {

    constructor(private dialog: MatDialog,
                private ngZone: NgZone) { }

    mostrarMensaje(mensaje: Mensaje) {
        this.ngZone.run(() => {
            return this.dialog.open(MensajeComponent,
                {
                    width: '315px',
                    data: mensaje
                });
        });
    }
}
