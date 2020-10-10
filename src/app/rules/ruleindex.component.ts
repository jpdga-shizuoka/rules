import {Component} from '@angular/core';
import {RuleComponent} from './rule.component';
@Component({
  selector: 'app-rule-index',
  templateUrl: './index.html',
})
export class RuleIndexComponent extends RuleComponent {
  get ruleId() {return 'index'; }
}
