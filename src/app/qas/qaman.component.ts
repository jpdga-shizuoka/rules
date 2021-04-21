import {Component} from '@angular/core';
import {QaComponent} from './qa.component';
@Component({
  selector: 'app-qa-man',
  templateUrl: './man.html',
})
export class QaManComponent extends QaComponent {
  get ruleId(): string {return 'man'; }
}
