import {Component} from '@angular/core';
import {RuleComponent} from './rule.component';
@Component({
  selector: 'app-rulereliefs',
  templateUrl: './reliefs.html',
})
export class RulereliefsComponent extends RuleComponent {
  get ruleId() {return 'reliefs'; }
}
