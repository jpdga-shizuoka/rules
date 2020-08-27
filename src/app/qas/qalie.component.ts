import {Component} from '@angular/core';
import {QaComponent} from './qa.component';
@Component({
  selector: 'app-qa-lie',
  templateUrl: './lie.html',
})
export class QaLieComponent extends QaComponent {
  get ruleId() {return 'lie'; }
}
