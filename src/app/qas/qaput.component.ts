import { Component } from '@angular/core';
import { QaComponent } from './qa.component';
@Component({
  selector: 'app-qa-put',
  templateUrl: './put.html'
})
export class QaPutComponent extends QaComponent {
  get ruleId(): string { return 'put'; }
}
