import {Component} from '@angular/core';
import {QaComponent} from './qa.component';
@Component({
  selector: 'app-qa-cmp',
  templateUrl: './cmp.html',
})
export class QaCmpComponent extends QaComponent {
  get ruleId(): string {return 'cmp'; }
}
