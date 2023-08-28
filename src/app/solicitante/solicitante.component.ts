import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {StepService} from "../step.service";

interface TipoPersona {
  name: string;
}

interface TipoDocumento {
  name: string;
}

@Component({
  selector: 'app-solicitante',
  templateUrl: './solicitante.component.html',
  styleUrls: ['./solicitante.component.css']
})
export class SolicitanteComponent implements OnInit {

  tiposPersona: TipoPersona[] = [];
  tiposDocumento: TipoDocumento[] = [];

  form = this.fb.group({
    fcTipoDocumento: ['', Validators.required],
    fcTipoPersona: ['', Validators.required],
    fcNroDocumento: [null, Validators.required],
    fcApellidoPaterno: ['', Validators.required],
    fcApellidoMaterno: ['', Validators.required],
    fcNombres: ['', Validators.required],
    fcTelefono: [null, Validators.required],
    fcCorreo: ['', Validators.required],
    fcDireccion: ['', Validators.required]
  })

  constructor(
    private fb: FormBuilder,
    private stepService: StepService
  ) {
  }

  onNext(): void {
    this.stepService.stepOver()
  }

  ngOnInit(): void {
    this.tiposPersona = [
      {name: 'Persona Natural'},
      {name: 'Persona Juridica'}
    ]

    this.tiposDocumento = [
      {name: 'DNI'},
      {name: 'CARNET DE EXTRANJERIA'}
    ]
  }
}
