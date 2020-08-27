import {Component} from '@angular/core';
import {QaComponent} from './qa.component';
@Component({
  selector: 'app-qa-tee',
  templateUrl: './tee.html',
})
export class QaTeeComponent extends QaComponent {
  get ruleId() {return 'tee'; }
}
