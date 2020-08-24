import {Component} from '@angular/core';
import {QaComponent} from './qa.component';
@Component({
  selector: 'app-qa-los',
  templateUrl: './los.html',
})
export class QaLosComponent extends QaComponent {
  get ruleId() {return 'los'; }
}
