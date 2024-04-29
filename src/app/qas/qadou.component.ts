import { Component } from '@angular/core';
import { QaComponent } from './qa.component';
@Component({
  selector: 'app-qa-dou',
  templateUrl: './dou.html'
})
export class QaDouComponent extends QaComponent {
  get ruleId(): string { return 'dou'; }
}
