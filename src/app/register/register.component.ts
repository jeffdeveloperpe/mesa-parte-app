import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {StepService} from "../step.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [StepService]
})
export class RegisterComponent implements OnInit {

  items: MenuItem[] = [];

  activeIndex = 0;

  constructor(private stepService: StepService) {
    this.stepService.step.subscribe(() => {
      console.log('step yeah !')
      this.activeIndex += 1
      console.log(this.activeIndex)
    })
  }

  ngOnInit(): void {
    this.items = [
            {
                label: 'Datos del Solicitante',
                routerLink: 'solicitante',
            },
            {
                label: 'Datos del documento',
                routerLink: 'documento'
            },
            {
                label: 'Daatos de la notificacion y anexos',
                routerLink: 'notificacion'
            }
        ];
  }
}
