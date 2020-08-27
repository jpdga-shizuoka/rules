import {Component} from '@angular/core';
import {QaComponent} from './qa.component';
@Component({
  selector: 'app-qa-obs',
  templateUrl: './obs.html',
})
export class QaObsComponent extends QaComponent {
  get ruleId() {return 'obs'; }
}
