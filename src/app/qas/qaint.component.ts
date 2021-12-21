import { Component } from '@angular/core';
import { QaComponent } from './qa.component';
@Component({
  selector: 'app-qa-int',
  templateUrl: './int.html'
})
export class QaIntComponent extends QaComponent {
  get ruleId(): string { return 'int'; }
}
