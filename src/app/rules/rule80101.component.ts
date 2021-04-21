import {Component} from '@angular/core';
import {RuleComponent} from './rule.component';
@Component({
  selector: 'app-rule-80101',
  templateUrl: './80101.html',
})
export class Rule80101Component extends RuleComponent {
  get ruleId(): string {return '80101'; }
}
