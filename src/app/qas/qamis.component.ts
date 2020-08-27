import {Component} from '@angular/core';
import {QaComponent} from './qa.component';
@Component({
  selector: 'app-qa-mis',
  templateUrl: './mis.html',
})
export class QaMisComponent extends QaComponent {
  get ruleId() {return 'mis'; }
}
