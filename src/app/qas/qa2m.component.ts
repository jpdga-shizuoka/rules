import { Component } from '@angular/core';
import { QaComponent } from './qa.component';
@Component({
  selector: 'app-qa-2m',
  templateUrl: './2m.html'
})
export class Qa2mComponent extends QaComponent {
  get ruleId(): string { return '2m'; }
}
