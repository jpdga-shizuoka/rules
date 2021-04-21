import { Component } from '@angular/core';
import { QaComponent } from './qa.component';
@Component({
  selector: 'app-qa-ob',
  templateUrl: './ob.html'
})
export class QaObComponent extends QaComponent {
  get ruleId(): string { return 'ob'; }
}
