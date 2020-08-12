import {Component} from '@angular/core';
import {RuleComponent} from './rule.component';
@Component({
  selector: 'app-ruleobstacles',
  templateUrl: './obstacles.html',
})
export class RuleobstaclesComponent extends RuleComponent {
  get ruleId() {return 'obstacles'; }
}
