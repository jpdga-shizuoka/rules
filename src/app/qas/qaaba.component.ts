import {Component} from '@angular/core';
import {QaComponent} from './qa.component';
@Component({
  selector: 'app-qa-aba',
  templateUrl: './aba.html',
})
export class QaAbaComponent extends QaComponent {
  get ruleId(): string {return 'aba'; }
}
