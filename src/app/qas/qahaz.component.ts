import { Component } from '@angular/core';
import { QaComponent } from './qa.component';
@Component({
  selector: 'app-qa-haz',
  templateUrl: './haz.html'
})
export class QaHazComponent extends QaComponent {
  get ruleId(): string { return 'haz'; }
}
