import { Component } from '@angular/core';
import { QaComponent } from './qa.component';
@Component({
  selector: 'app-qa-pro',
  templateUrl: './pro.html'
})
export class QaProComponent extends QaComponent {
  get ruleId(): string { return 'pro'; }
}
