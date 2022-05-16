import { Component, Inject, NgZone, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Mensaje } from '@shared/model/mensaje';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.scss'],
})
export class MensajeComponent implements OnInit {

  mensaje: Mensaje;
  constructor(private mensajeDialog: MatDialogRef<MensajeComponent>,
              private ngZone: NgZone,
              @Inject(MAT_DIALOG_DATA) public data: Mensaje) { }

  ngOnInit() {
    this.mensaje = this.data;
  }

  cerrarMensaje() {
    this.ngZone.run(() =>
      this.mensajeDialog.close(true)
    );
  }

}
