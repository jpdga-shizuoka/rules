import { Component } from '@angular/core';
import { QaComponent } from './qa.component';
@Component({
  selector: 'app-qa-app',
  templateUrl: './app.html'
})
export class QaAppComponent extends QaComponent {
  get ruleId(): string { return 'app'; }
}
