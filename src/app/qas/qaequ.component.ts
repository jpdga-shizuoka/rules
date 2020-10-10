import {Component} from '@angular/core';
import {QaComponent} from './qa.component';
@Component({
  selector: 'app-qa-equ',
  templateUrl: './equ.html',
})
export class QaEquComponent extends QaComponent {
  get ruleId() {return 'equ'; }
}
