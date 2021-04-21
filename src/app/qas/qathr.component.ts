import { Component } from '@angular/core';
import { QaComponent } from './qa.component';
@Component({
  selector: 'app-qa-thr',
  templateUrl: './thr.html'
})
export class QaThrComponent extends QaComponent {
  get ruleId(): string { return 'thr'; }
}
