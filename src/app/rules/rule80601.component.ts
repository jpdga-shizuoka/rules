import { Component } from '@angular/core';
import { RuleComponent } from './rule.component';
@Component({
  selector: 'app-rule-80601',
  templateUrl: './80601.html'
})
export class Rule80601Component extends RuleComponent {
  get ruleId(): string { return '80601'; }
}
