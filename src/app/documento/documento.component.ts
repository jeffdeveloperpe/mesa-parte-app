import {Component, OnInit} from '@angular/core';

interface TipoDocumento {
  name: string
}

@Component({
  selector: 'app-documento',
  templateUrl: './documento.component.html',
  styleUrls: ['./documento.component.css']
})
export class DocumentoComponent implements OnInit {

  tiposDocumento: TipoDocumento[] = [];

  ngOnInit(): void {
    this.tiposDocumento = [
      {name: 'CARTA'},
      {name: 'CARTA NOTARIAL'},
      {name: 'CEDULA DE NOTIFICACION'},
      {name: 'OFICIO'},
      {name: 'SOLICITUD'}
    ]
  }
}
