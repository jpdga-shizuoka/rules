import {Component} from '@angular/core';
import {QaComponent} from './qa.component';
@Component({
  selector: 'app-qa-tim',
  templateUrl: './tim.html',
})
export class QaTimComponent extends QaComponent {
  get ruleId() {return 'tim'; }
}
