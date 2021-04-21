import {Component} from '@angular/core';
import {RuleComponent} from './rule.component';
@Component({
  selector: 'app-rule-80901',
  templateUrl: './80901.html',
})
export class Rule80901Component extends RuleComponent {
  get ruleId(): string {return '80901'; }
}
