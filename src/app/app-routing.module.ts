import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {AppComponent} from "./app.component";
import {SolicitanteComponent} from "./solicitante/solicitante.component";
import {DocumentoComponent} from "./documento/documento.component";
import {NotificacionComponent} from "./notificacion/notificacion.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        component: SolicitanteComponent,
        path: 'solicitante'
      },
      {
        component: DocumentoComponent,
        path: 'documento'
      },
      {
        component: NotificacionComponent,
        path: 'notificacion'
      }
    ], {scrollPositionRestoration: 'enabled'})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
