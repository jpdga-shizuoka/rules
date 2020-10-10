import {Component} from '@angular/core';
import {RuleComponent} from './rule.component';
@Component({
  selector: 'app-rule-preface',
  templateUrl: './preface.html',
})
export class RulePrefaceComponent extends RuleComponent {
  get ruleId() {return 'preface'; }
}
