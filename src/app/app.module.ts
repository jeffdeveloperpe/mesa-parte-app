import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ButtonModule} from "primeng/button";
import {TabViewModule} from "primeng/tabview";
import { RegisterComponent } from './register/register.component';
import { ManualComponent } from './manual/manual.component';
import {StepsModule} from "primeng/steps";
import {AppRoutingModule} from "./app-routing.module";
import { SolicitanteComponent } from './solicitante/solicitante.component';
import { DocumentoComponent } from './documento/documento.component';
import { NotificacionComponent } from './notificacion/notificacion.component';
import {ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {DropdownModule} from "primeng/dropdown";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import {InputNumberModule} from "primeng/inputnumber";
import {RippleModule} from "primeng/ripple";
import {StepService} from "./step.service";
import {FileUploadModule} from "primeng/fileupload";

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ManualComponent,
    SolicitanteComponent,
    DocumentoComponent,
    NotificacionComponent
  ],
  imports: [
    BrowserAnimationsModule,
    NoopAnimationsModule,
    BrowserModule,
    ButtonModule,
    TabViewModule,
    StepsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    InputTextModule,
    DropdownModule,
    InputNumberModule,
    RippleModule,
    FileUploadModule
  ],
  providers: [StepService],
  bootstrap: [AppComponent]
})
export class AppModule { }
