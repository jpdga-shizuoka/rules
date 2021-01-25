import {Component} from '@angular/core';
import {MiscComponent} from './misc.component';
@Component({
  selector: 'app-misc-obhazardinbounds',
  templateUrl: './obhazardinbounds.html',
})
export class MiscObhazardinboundsComponent extends MiscComponent {
  get ruleId() {return 'obhazardinbounds'; }
}
