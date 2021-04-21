import {Component} from '@angular/core';
import {QaComponent} from './qa.component';
@Component({
  selector: 'app-qa-cas',
  templateUrl: './cas.html',
})
export class QaCasComponent extends QaComponent {
  get ruleId(): string {return 'cas'; }
}
