import { Injectable, NgZone } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MensajeComponent } from '@shared/mensaje/mensaje.component';
import { Mensaje } from '@shared/model/mensaje';

@Injectable()
export class MensajeService {

    dialogRef: any;

    constructor(private dialog: MatDialog,
                private ngZone: NgZone,
                private router: Router) { }

    mostrarMensaje(mensaje: Mensaje, url?: string) {
        this.ngZone.run(() => {
            this.dialogRef = this.dialog.open(MensajeComponent,
                {
                    width: '315px',
                    data: mensaje
                });
            this.dialogRef.afterClosed().subscribe(() => {
                if (url) {
                    this.router.navigateByUrl(url);
                }
            });
        });
    }
}
