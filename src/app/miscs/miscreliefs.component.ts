import {Component} from '@angular/core';
import {MiscComponent} from './misc.component';
@Component({
  selector: 'app-misc-reliefs',
  templateUrl: './reliefs.html',
})
export class MiscReliefsComponent extends MiscComponent {
  get ruleId(): string {return 'reliefs'; }
}
