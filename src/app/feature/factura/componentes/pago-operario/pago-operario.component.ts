import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pago-operario',
  templateUrl: './pago-operario.component.html',
  styleUrls: ['./pago-operario.component.scss']
})
export class PagoOperarioComponent implements OnInit {

  idOperario: string;
  constructor() { }

  ngOnInit(): void {
  }

}
