import { Component } from '@angular/core';
import { RuleComponent } from './rule.component';
@Component({
  selector: 'app-rule-80201',
  templateUrl: './80201.html'
})
export class Rule80201Component extends RuleComponent {
  get ruleId(): string { return '80201'; }
}
