import { Component } from '@angular/core';
import { QaComponent } from './qa.component';
@Component({
  selector: 'app-qa-mar',
  templateUrl: './mar.html'
})
export class QaMarComponent extends QaComponent {
  get ruleId(): string { return 'mar'; }
}
