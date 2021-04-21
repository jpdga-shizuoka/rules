import {Component} from '@angular/core';
import {QaComponent} from './qa.component';
@Component({
  selector: 'app-qa-com',
  templateUrl: './com.html',
})
export class QaComComponent extends QaComponent {
  get ruleId(): string {return 'com'; }
}
