import {Component} from '@angular/core';
import {QaComponent} from './qa.component';
@Component({
  selector: 'app-qa-cou',
  templateUrl: './cou.html',
})
export class QaCouComponent extends QaComponent {
  get ruleId() {return 'cou'; }
}
