import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StepService {

  private stepSource = new Subject<void>()
  step = this.stepSource.asObservable()

  stepOver() {
    this.stepSource.next();
  }
}
