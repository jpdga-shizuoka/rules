import {Component} from '@angular/core';
import {MiscComponent} from './misc.component';
@Component({
  selector: 'app-misc-obstacles',
  templateUrl: './obstacles.html',
})
export class MiscObstaclesComponent extends MiscComponent {
  get ruleId() {return 'obstacles'; }
}
