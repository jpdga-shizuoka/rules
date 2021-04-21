import {Component} from '@angular/core';
import {QaComponent} from './qa.component';
@Component({
  selector: 'app-qa-pra',
  templateUrl: './pra.html',
})
export class QaPraComponent extends QaComponent {
  get ruleId(): string {return 'pra'; }
}
