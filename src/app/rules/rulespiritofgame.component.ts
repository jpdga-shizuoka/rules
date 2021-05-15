import { Component } from '@angular/core';
import { RuleComponent } from './rule.component';
@Component({
  selector: 'app-rule-spiritofgame',
  templateUrl: './spiritofgame.html'
})
export class RuleSpiritofgameComponent extends RuleComponent {
  get ruleId(): string { return 'spiritofgame'; }
}
