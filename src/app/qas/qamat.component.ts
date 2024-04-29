import { Component } from '@angular/core';
import { QaComponent } from './qa.component';
@Component({
  selector: 'app-qa-mat',
  templateUrl: './mat.html'
})
export class QaMatComponent extends QaComponent {
  get ruleId(): string { return 'mat'; }
}
