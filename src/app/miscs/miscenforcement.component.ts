import {Component} from '@angular/core';
import {MiscComponent} from './misc.component';
@Component({
  selector: 'app-misc-enforcement',
  templateUrl: './enforcement.html',
})
export class MiscEnforcementComponent extends MiscComponent {
  get ruleId() {return 'enforcement'; }
}
