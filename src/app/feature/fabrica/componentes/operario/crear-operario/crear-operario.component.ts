import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MensajeService } from '@shared/service/mensaje/mensaje.service';
import { OperarioService } from '@shared/service/operario/operario.service';

@Component({
  selector: 'app-crear-operario',
  templateUrl: './crear-operario.component.html',
  styleUrls: ['./crear-operario.component.scss']
})
export class CrearOperarioComponent implements OnInit {

  operarioForm: FormGroup;

  constructor(private operacrioService: OperarioService,
              private mensajeService: MensajeService) { }

  ngOnInit() {
    this.construirFormularioOperario();
  }

  crearOperario() {
    this.operacrioService.crearOperario(this.operarioForm.value).subscribe(resp => {
      if (resp) {
        this.mensajeService.mostrarMensaje(
          {
            titulo: 'Su Registro Ha Sido Creado!',
            mensaje: `Registro creado con exito`,
            tipo: 2
          }, 'fabrica/listar/operario');
      }
    }
    );
  }

  private construirFormularioOperario() {
    this.operarioForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      nombre: new FormControl('', [Validators.required]),
      telefono: new FormControl('', [Validators.required]),
      direccion: new FormControl('', [Validators.required])
    });
  }
}
