import {Component} from '@angular/core';
import {QaComponent} from './qa.component';
@Component({
  selector: 'app-qa-sco',
  templateUrl: './sco.html',
})
export class QaScoComponent extends QaComponent {
  get ruleId() {return 'sco'; }
}
